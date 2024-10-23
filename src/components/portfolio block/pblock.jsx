import React, { useState } from 'react';
import styles from './Pblock.module.scss';

const projectsData = [
  {
    id: 1,
    gif: 'https://i.imgur.com/EtVyUj0.png',
    title: 'AWWWDDE. Logo',
    description: 'The logo created for my portfolio, as well as to represent my work, includes the first two letters of my nickname: A and W.',
    stack: 'AI, PH',
    link: 'https://dribbble.com/shots/25041571-awwwdde-Personal-Logo', 
  },
  {
    id: 2,
    gif: 'https://i.imgur.com/m3w8M4I.png',
    title: 'AWWWDDE. Portfolio website',
    description: 'This site I created and am still creating for my portfolio and also to pump up my skills, it includes different styles as I am learning new things.',
    stack: 'React, SASS, threejs',
    link: 'https://github.com/awwwdde/awwwdde-portfolio-2', 
  },
  {
    id: 3,
    gif: 'https://i.imgur.com/OaAa3wC.png',
    title: 'FACHWERKHAUS',
    description: 'website for a construction company specializing in the construction of private houses in fachwerk style. (Training project)',
    stack: 'Figma, React, SASS, GULP',
    link: 'https://example.com/project3', 
  },
  {
    id: 4,
    gif: 'https://i.imgur.com/uti9qV8.png',
    title: 'PORTFOLIO. Template1',
    description: 'This is the first look at the portfolio, in my mind I did it as a taplink. Here it is assembled and ready to upload to hosting, you can change the text and links.',
    stack: 'React, SASS',
    link: 'https://github.com/awwwdde/PORTFOLIO1', 
  },
];

const PBlock = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = projectsData.length;

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.projectsContainer}>
      <h2>My Portfolio</h2>
      <a href={projectsData[currentPage].link} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
        <img src={projectsData[currentPage].gif} alt={projectsData[currentPage].title} className={styles.projectGif} />
        <div className={styles.projectInfo}>
          <h3>{projectsData[currentPage].title}</h3>
          <p>{projectsData[currentPage].description}</p>
          <p className={styles.projectStack}>{projectsData[currentPage].stack}</p>
        </div>
      </a>
      <div className={styles.pagination}>
        {currentPage > 0 && (
          <button className={styles.paginationButton} onClick={handleBack}>
            Back
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button className={styles.paginationButton} onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PBlock;