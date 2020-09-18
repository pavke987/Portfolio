import React from 'react';
import classes from './Footer.module.css';
import {ReactComponent as GmailLogo} from '../../../assets/SkillsLogos/SVG/gmail.svg';
import {ReactComponent as PhoneLogo} from '../../../assets/SkillsLogos/SVG/phone-hang-up.svg';
import {ReactComponent as InstagramLogo} from '../../../assets/SkillsLogos/SVG/instagram.svg';
import {ReactComponent as LinkedInLogo} from '../../../assets/SkillsLogos/SVG/linkedin.svg';
import {ReactComponent as FacebookLogo} from '../../../assets/SkillsLogos/SVG/facebook.svg';
import {ReactComponent as TwitterLogo} from '../../../assets/SkillsLogos/SVG/twitter.svg';

const footer = props => {
    return (
        <footer id="contact" className={classes.Footer}>
            <h2 className={classes.Title}>Ivan Pavic</h2>
            
            <div className={classes.Content}>
                <div className={classes.Containers}>
                    <ul className={classes.Info}>
                        <li className={classes.Item}><GmailLogo className={classes.Icon}/> pavke987@gmail.com</li>
                        <li className={classes.Item}><PhoneLogo className={[classes.IconPhone, classes.Icon].join(' ')} /> +3816953053185</li>
                    </ul>
                </div>
                <div className={classes.Containers}>
                    <p className={classes.Copy}>
                        Copyright&copy; 2020 Ivan Pavic
                    </p>
                </div>
                <div className={classes.Containers}>
                <ul className={classes.Social}>
                    <li><a href="https://www.facebook.com/ivan.slagalica.96"><FacebookLogo className={classes.Icon} /></a></li>
                    <li><a href="https://www.linkedin.com/in/ivan-pavic-a248ba189/"><LinkedInLogo className={classes.Icon}/></a></li>
                    <li><a href="https://www.instagram.com/?hl=en"><InstagramLogo className={classes.Icon}/></a></li>
                    <li><a href="https://twitter.com/?lang=en"><TwitterLogo className={classes.Icon}/></a></li>
                </ul>
                </div>
            </div>
          

        </footer>
    )
};

export default footer;