import React from 'react';
import Bar from '../Bar/Bar';
import styles from './Features.module.css';
import img1 from '../../images/illustration-features-tab-1.svg';
import img2 from '../../images/illustration-features-tab-2.svg';
import img3 from '../../images/illustration-features-tab-3.svg';

const Features = () => {
    const [item,setItem] = React.useState(1);

    return (
        <section id='features' className={styles.container}>
            <div className={styles.textContainer}>
            <h2>Features</h2>
            <h4>Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.</h4>
            </div>
            <Bar item={item} setItem={setItem}/>
            <div className={styles.contentContainer}>
              {item === 1 && <div className={styles.content1}>
                <img src={img1}/>
                <div className={styles.text}>
                    <h3>Bookmark in one click</h3>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                    <button>More info</button>
                </div>
              </div>}
              {item === 2 && <div className={styles.content1}>
                <img src={img2}/>
                <div className={styles.text}>
                    <h3>Intelligent search</h3>
                    <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of yout bookmarks.</p>
                    <button>More info</button>
                </div>
              </div>}
              {item === 3 && <div className={styles.content1}>
                <img src={img3}/>
                <div className={styles.text}>
                    <h3>Share your bookmarks</h3>
                    <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                    <button>More info</button>
                </div>
              </div>}
            </div>
        </section>
    )
}

export default Features;
