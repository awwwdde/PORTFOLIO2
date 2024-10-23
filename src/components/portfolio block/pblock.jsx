import React, { useState } from 'react';
import styles from './Pblock.module.scss';

const projectsData = [
  {
    id: 1,
    gif: 'https://i.imgur.com/q9uph1T.png',
    title: 'Awwwdde Logo',
    description: 'The logo created for my portfolio, as well as to represent my work, includes the first two letters of my nickname: A and W.',
    stack: 'AI, PH',
  },
  {
    id: 2,
    gif: 'https://example.com/project2.gif',
    title: 'ASKBROWS',
    description: 'TEXT',
    stack: 'React, SASS',
  },
  {
    id: 3,
    gif: 'https://example.com/project3.gif',
    title: '26STUDIO design',
    description: 'DEsign',
    stack: 'Pixso, Figma, AI',
  },
  {
    id: 4,
    gif: 'https://example.com/project4.gif',
    title: 'FACHWERKHAUS',
    description: 'TEXT',
    stack: 'React, SASS',
  },
];

const PBlock = () => {
  const [currentPage, setCurrentPage] = useState(0 );
  const projectsPerPage = 2;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.projectsContainer}>
      My Portfolio
      <div className={styles.projects}>
        {projectsData
          .slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)
          .map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <img src={project.gif} alt={project.title} className={styles.projectGif} />
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className={styles.projectStack}>{project.stack}</p>
              </div>
            </div>
          ))}
      </div>
      <div className={styles.pagination}>
        {Array(totalPages)
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              className={styles.paginationLink}
              onClick={() => handlePageChange(index)}
            >
              {index + 1}
            </span>
          ))}
      </div>
    </div>
  );
};

export default PBlock;