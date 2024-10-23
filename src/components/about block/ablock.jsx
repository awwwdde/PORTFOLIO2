import React from 'react';
import styles from './Ablock.module.scss'; 

const Ablock = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>About me</h2>
            {/* <img 
                src="https://i.imgur.com/5TL9oBl.gif" 
                alt="Description of the image" 
                className={styles.image} 
            /> */}
            <p className={styles.text}>
                Hello! My name is Vladislav, and as you may have guessed, I am a Front End developer! 
                Let me tell you a little about how I got here. It all started when I was around 12-13 years old, 
                when I first got acquainted with programming. At that time, I was rewriting trainers for Call Of Duty in C++. 
                After my main account was blocked again, I realized it was time for a change. 
                I became excited about the idea of writing full-fledged applications in C++, but nothing came of it. 
                Later, I enrolled in a technical college, and from the first year, I became interested in web development. 
                That’s how my journey as a Front End developer began.
            </p>
        </div>
    );
};

export default Ablock;