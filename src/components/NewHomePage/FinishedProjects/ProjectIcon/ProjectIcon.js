import React from 'react';
import classes from './ProjectIcon.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const projectIcon = (props) => {
    let link = null
    if (props.link) {
        link = <NavLink className={classes.Link} onClick={props.unmountHandler} to={props.link}>Learn more &rarr;</NavLink>
    }
    if (props.hrefLink) {
        link = <a className={classes.Link} href={props.hrefLink}>Learn more &rarr;</a>
    }
    return (
        
        <div className={classes.ProjectIcon}>
            <img src={props.image} alt={props.img} className={classes.Image} />
            <span className={classes.ParentSpan1}>
                <span className={classes.ParentSpan}>
                    <span className={classes.ProjectBottom}></span>  
                </span>
            </span>
          
            <h2 className={classes.Title}>{props.title}</h2>
            <p className={classes.Text}>{props.text}</p>
            {link}
        </div>

               
    );
};

const mapDispatchToProps = dispatch => {
    return {
        unmountHandler: () => dispatch({type: 'UNMOUNT'})
    }
}

export default connect(null, mapDispatchToProps)(projectIcon);