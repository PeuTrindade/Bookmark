import React from 'react';
import styles from './Bar.module.css';

const Bar = ({item,setItem}) => {
    return (
        <section className={styles.container}>
            <div className={styles.items}>
              <div onClick={() => setItem(1)} className={styles.item1}>
                <h3>Simple Bookmarking</h3>
            </div>
            <div onClick={() => setItem(2)} className={styles.item2}>
                <h3>Speedy Searching</h3>
            </div>
            <div onClick={() => setItem(3)} className={styles.item3}>
                <h3>Easy Sharing</h3>
            </div>  
            </div>            
            <div className={styles.bar}>
                {item === 1 && <div className={styles.item1Bar}>
                    
                </div>}
                {item === 2 && <div className={styles.item2Bar}>
                    
                </div>}
                {item === 3 && <div className={styles.item3Bar}>
                    
                </div>}
            </div>
        </section>
    )
}

export default Bar;
