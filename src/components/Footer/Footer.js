import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer id='contact' className={styles.footer}>
            <div className={styles.text}>
                <h3>35.000+ ALREADY JOINED</h3>
                <h2>Stay up-to-date with what we´re doing.</h2>
            </div>  
            <form className={styles.form}>
                <input placeholder='Enter your email address' type='email'/>
                <button>Contact Us</button>
            </form>
        </footer>
    )
}

export default Footer;
