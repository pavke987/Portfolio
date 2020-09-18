import React from 'react';
import TitleResultList from '../../../../Containers/MoviesContainer/TitleResultList/TitleResultList';
import classes from './SideDrawer.module.css';
import Backdrop from '../Backdrop/Backdrop';
import PageButtons from '../../PageButtons/PageButons';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    };
    return (  
        <React.Fragment>
                <Backdrop show={props.open} closed={props.closed}/>
            <div className={attachedClasses.join(' ')}>
              <TitleResultList clicked={props.clicked} data={props.data}/>
              <PageButtons nextPage={props.nextPage} prevPage={props.prevPage} page={props.page} pageNum={props.pageNum}/>
            </div>
            </React.Fragment>   
             );
};
 
export default sideDrawer;