import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../images/logo-bookmark.svg';
import menuHamburguer from '../../images/icon-hamburger.svg';
import closeMenu from '../../images/icon-close.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';

const Navbar = () => {
    const [isMobile,setIsMobile] = React.useState(false);
    const [mobileMenu,setMobileMenu] = React.useState(false);
    const screenSize = window.innerWidth;
    
    function handleClick(event){
        event.preventDefault();
        const href = event.target.getAttribute('href');
        const section = document.querySelector(href);
        const top = section.offsetTop;
  
        window.scrollTo({
          top: top,
          behavior: 'smooth',
        });
      }

    React.useEffect(() => {
        if(screenSize <= 670){
            setIsMobile(true);
        }
        else {
            setIsMobile(false); 
        }
    },[screenSize]);

    return (
        <header className={styles.headerContainter}>
            <nav className={styles.navbarContainer}>
               <div className={styles.navbarLogo}>
                 <img src={logo}/>
               </div>  
               {isMobile ? 
               <div className={styles.menuMobileContainer}>
                 {mobileMenu ? <img onClick={() => setMobileMenu(false)} className={styles.closeMenu} src={closeMenu}/> : <img onClick={() => setMobileMenu(true)} className={styles.menuHamburguer} src={menuHamburguer}/>}  
               </div>
               : 
                <ul className={styles.itemsListDesktop}>
                 <li onClick={handleClick} className={styles.itemDesktop}><a href='#features'>Features</a></li>
                 <li onClick={handleClick} className={styles.itemDesktop}><a href='#features'>Pricing</a></li>
                 <li onClick={handleClick} className={styles.itemDesktop}><a href='#contact'>Contact</a></li>
                 <li className={styles.ButtonDesktop}>Login</li>
               </ul>}
            </nav>
            {mobileMenu && <div className={styles.displayMobileContainer}>
            <ul className={styles.itemsListMobile}>
                 <li onClick={handleClick} className={styles.itemMobile}><a href='#features'>Features</a></li>
                 <li onClick={handleClick} className={styles.itemMobile}><a href='#features'>Pricing</a></li>
                 <li onClick={handleClick} className={styles.itemMobile}><a href='#contact'>Contact</a></li>
                 <li className={styles.buttonMobile}>Login</li>
               </ul>
            <div className={styles.socialMedia}>
                <img src={facebook}/>
                <img src={twitter}/>
            </div>
            </div>}
        </header>
    )
}

export default Navbar
