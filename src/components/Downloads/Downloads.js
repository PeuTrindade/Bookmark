import React from 'react';
import styles from './Downloads.module.css';
import img1 from '../../images/logo-chrome.svg';
import img2 from '../../images/logo-firefox.svg';
import img3 from '../../images/logo-opera.svg';

const Downloads = () => {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h2>Download the extension</h2>
                <p>We´ve got more browsers in the pipeline. Please do let us know if you´ve got a favourite you´d like us to prioritize.</p>
            </div>
            <div className={styles.itemsContainer}>
                <div className={styles.items}>
                <div className={styles.itemContainer}>
                    <img src={img1}/>
                    <h3>Add to Chrome</h3>
                    <p>Minimun version 62</p>
                    <button>Add and Install Extesion</button>
                </div>
                <div className={styles.itemContainer}>
                    <img src={img2}/>
                    <h3>Add to Firefox</h3>
                    <p>Minimun version 55</p>
                    <button>Add and Install Extesion</button>
                </div>
                <div className={styles.itemContainer}>
                    <img src={img3}/>
                    <h3>Add to Opera</h3>
                    <p>Minimun version 46</p>
                    <button>Add and Install Extesion</button>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Downloads;
