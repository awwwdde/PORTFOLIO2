import React, { useState } from 'react';
import styles from './Pblock.module.scss';

const projectsData = [
  {
    id: 1,
    gif: 'https://i.imgur.com/q9uph1T.png',
    title: 'Awwwdde Logo',
    description: 'The logo created for my portfolio, as well as to represent my work, includes the first two letters of my nickname: A and W.',
    stack: 'AI, PH',
    link: 'https://dribbble.com/shots/25041571-awwwdde-Personal-Logo', // Ссылка на проект
  },
  {
    id: 2,
    gif: 'https://example.com/project2.gif',
    title: 'ASKBROWS',
    description: 'TEXT',
    stack: 'React, SASS',
    link: 'https://example.com/project2', // Ссылка на проект
  },
  {
    id: 3,
    gif: 'https://example.com/project3.gif',
    title: '26STUDIO design',
    description: 'DEsign',
    stack: 'Pixso, Figma, AI',
    link: 'https://example.com/project3', // Ссылка на проект
  },
  {
    id: 4,
    gif: 'https://example.com/project4.gif',
    title: 'FACHWERKHAUS',
    description: 'TEXT',
    stack: 'React, SASS',
    link: 'https://example.com/project4', // Ссылка на проект
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