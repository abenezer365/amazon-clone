import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
        <footer className={styles.footer}>
      <div className={styles.responsiveWrapper}>
        <div className={styles.footerSection}>
          <div className={styles.column}>
            <h4>Get to Know Us</h4>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">About Amazon</a>
            <a href="#">Investor Relations</a>
            <a href="#">Amazon Devices</a>
            <a href="#">Amazon Science</a>
          </div>

          <div className={styles.column}>
            <h4>Make Money with Us</h4>
            <a href="#">Sell products on Amazon</a>
            <a href="#">Sell on Amazon Business</a>
            <a href="#">Sell apps on Amazon</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Advertise Your Products</a>
            <a href="#">Self-Publish with Us</a>
            <a href="#">Host an Amazon Hub</a>
            <a href="#">See More Make Money with Us</a>
          </div>

          <div className={styles.column}>
            <h4>Amazon Payment Products</h4>
            <a href="#">Amazon Business Card</a>
            <a href="#">Shop with Points</a>
            <a href="#">Reload Your Balance</a>
            <a href="#">Amazon Currency Converter</a>
          </div>

          <div className={styles.column}>
            <h4>Let Us Help You</h4>
            <a href="#">Amazon and COVID-19</a>
            <a href="#">Your Account</a>
            <a href="#">Your Orders</a>
            <a href="#">Shipping Rates & Policies</a>
            <a href="#">Returns & Replacements</a>
            <a href="#">Manage Your Content and Devices</a>
            <a href="#">Help</a>
          </div>
        </div>

        <div className={styles.languageCurrency}>
          <button>🌐 English</button>
          <button>$ USD - U.S. Dollar</button>
          <button>🇺🇸 United States</button>
        </div>

        <div className={styles.bottomBar}>
          <p>
            Conditions of Use | Privacy Notice | Consumer Health Data Privacy Disclosure |
            Your Ads Privacy Choices
          </p>
          <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
    </>
    
  );
};

export default Footer;