import React from 'react';
import styles from './Cblock.module.scss'; // Импортируем стили

const Cblock = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contact Me</h2>
            <p className={styles.text}>
                If you would like to get in touch, feel free to reach out via email or connect with me on social media!
            </p>
            <p className={styles.text}>
                aufjakegutlan@gmail.com
            </p>
            <p className={styles.text}>
            <a href="https://t.me/adolfvav" target="_blank" rel="noopener noreferrer" className={styles.link}>Telegram</a>
            </p>
            <p className={styles.text}>
            <a href="https://github.com/awwwdde" target="_blank" rel="noopener noreferrer" className={styles.link}>Github</a>
            </p>
            <p className={styles.text}>
            <a href="https://dribbble.com/awwwdde" target="_blank" rel="noopener noreferrer" className={styles.link}>Dribbble</a>
            </p>
        </div>
    );
};

export default Cblock;