import React from 'react';
import styles from './InitialSection.module.css';
import image from '../../images/illustration-hero.svg';

const InitialSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try ir for free.</p>
                <button className={styles.btn1}>Get it on Chrome</button>
                <button className={styles.btn2}>Get it on Firefox</button>
            </div>
            <div className={styles.imageContainer}>
                <img src={image}/>
            </div>
        </section>
    )
}

export default InitialSection;
