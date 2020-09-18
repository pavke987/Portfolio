import React from 'react';
import classes from './Forms.module.css';
import Finalise from '../Finalize/Finalize';
import TextArea from '../TextArea/TextArea';
import Time from '../Time/Time';
import Modal from '../../../UI/Modal/Modal';
import Categories from '../Categories/Categories';

const forms = props => {

    let time = null;
    let textArea = null;
    let finalize = null;
        if (props.time) {
            time = <Time click={props.timeClick}
                eventHandler={props.eventHandler}/>
        };
        if (props.textArea) {
            textArea= <TextArea click={props.textClick} 
            eventHandler={props.eventHandler}/>
        };
        if (props.finalize) {
            finalize = <React.Fragment>
                        <Modal show={props.show} close={props.toggleModal}>
                            <Categories categories={props.categories}
                            change={props.change}
                            delete={props.delete}
                            add={props.add}/>
                        </Modal>
                        <Finalise click={props.finalizeClick}
                        open={props.toggleModal}
                        categories={props.categories}
                        eventHandler={props.eventHandler}
                        categories2={props.categories}/>
                    </React.Fragment>
        };

    return (
        <div className={classes.Forms}>
            {time}
            {textArea}
            {finalize}
        </div>
    );
};

export default forms;