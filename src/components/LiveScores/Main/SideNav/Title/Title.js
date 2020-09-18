import React from 'react';
import { ReactComponent as Star} from '../../../../../assets/liveScore/star.svg';
import classes from './Title.module.css';
const title = props => {
    let title = null
    let titleClass = [classes.StarTitle]
    if(props.starTitle) {
        title = <div className={classes.StarTitle}>
                    <Star className={classes.Icon}/>
                    <h3>{props.starTitle}</h3>
                </div>
      }

    if(props.title) {
            titleClass.push(classes.Title);
                title = <div className={titleClass.join(' ')}>
                            <h3 className={classes.H3}>{props.title}</h3>
                        </div>
    }
  
    return (
      <React.Fragment>
          {title}
      </React.Fragment>
    )
};

export default title;