import React from 'react';
import styles from './Cblock.module.scss'; // Импортируем стили

const Cblock = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contact Me</h2>
            <img 
                src="https://i.imgur.com/5TL9oBl.gif" 
                alt="Contact illustration" 
                className={styles.image} 
            />
            <p className={styles.text}>
                If you would like to get in touch, feel free to reach out via email or connect with me on social media!
            </p>
            <p className={styles.text}>
                Email: aufjakegutlan@gmail.com
            </p>
            <p className={styles.text}>
                click: <a href="https://t.me/adolfvav" target="_blank" rel="noopener noreferrer">Telegram</a>
            </p>
            <p className={styles.text}>
                click: <a href="https://github.com/awwwdde" target="_blank" rel="noopener noreferrer">Github</a>
            </p>
        </div>
    );
};

export default Cblock;