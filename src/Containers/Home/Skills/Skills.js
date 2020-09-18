import React, { Component } from 'react';
import classes from './Skills.module.css';
import {ReactComponent as ReactLogo} from '../../../assets/SkillsLogos/SVG/react.svg';
import {ReactComponent as HtmlLogo} from '../../../assets/SkillsLogos/SVG/html5.svg';
import {ReactComponent as CssLogo} from '../../../assets/SkillsLogos/SVG/css3.svg';
import {ReactComponent as ReduxLogo} from '../../../assets/SkillsLogos/SVG/redux.svg';
import {ReactComponent as JSLogo} from '../../../assets/SkillsLogos/SVG/javascript.svg';
import {ReactComponent as NpmLogo} from '../../../assets/SkillsLogos/SVG/npm.svg';
import VisibilitySensor from 'react-visibility-sensor';

class Skills extends Component {
    state = {
        visible: false 
    }
     render() {
        let reactImage = [classes.Images, classes.React]
        let reduxImage = [classes.Images, classes.Redux]
        let cssImage = [classes.Images, classes.Css]
        let htmlImage = [classes.Images, classes.Html]
        let jsImage = [classes.Images, classes.Js]
        let npmImage = [classes.Images, classes.Npm]
    
         const onChangeHandler = (isVisible) => {
            if (isVisible) {
                this.setState({visible: true})
            } else {
                this.setState({visible: false})
            } 
          }

          if (this.state.visible) {
              reactImage.push(classes.animate);
              reduxImage.push(classes.animate);
              cssImage.push(classes.animate);
              htmlImage.push(classes.animate);
              jsImage.push(classes.animate);
              npmImage.push(classes.animate);

          }
        return (
            <VisibilitySensor  partialVisibility onChange={onChangeHandler}>
                <section className={classes.Skills} id="skills">
                        <h2 className={classes.Title}>Skills</h2>
                        <div className={classes.Content}>
                        <div className={classes.Container}>
                                <h3 className={classes.SubTitle}>React</h3>
                                <ReactLogo className={reactImage.join(' ')} /> 
                                <h3 className={classes.SubTitle}>Redux</h3>
                                <ReduxLogo className={reduxImage.join(' ')} />
                               
                            </div>
                    
                            <div className={classes.Container}>
                                <h3 className={classes.SubTitle}>CSS</h3>
                                <CssLogo className={cssImage.join(' ')}/>
                                <h3 className={classes.SubTitle}>HTML</h3> 
                                <HtmlLogo className={htmlImage.join(' ')} /> 
                            </div>
                            <div className={classes.Container}>
                                <h3 className={classes.SubTitle}>JavaScript</h3>
                                <JSLogo className={jsImage.join(' ')} />
                                <h3 className={classes.SubTitle}>NPM</h3> 
                                <NpmLogo className={npmImage.join(' ')} />
                            </div> 
                        </div>
                        
                </section>
           </VisibilitySensor> 
    
        )
     }

};

export default Skills;