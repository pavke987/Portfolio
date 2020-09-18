import React, { Component } from 'react';
import background1 from '../../../assets/ideas-background.png';
import { connect } from 'react-redux';
import classes from './NewIdea.module.css';
import * as actionTypes from '../../../store/actions/actionTypes';
import Forms from '../../../components/Ideas/Forms/Forms';
import { saveIdea, getCategories, addCategory, deleteCategory } from '../../../Services/dbHelper';


class NewIdea extends Component {
    state = {
        newCategory: { name: ''},
        start: true,
        time: false,
        textArea: false,
        finalize: false,
        openModal: false,
        ideaObj:{
            time: '', 
            date: '',
            title: '',
            idea: '',
            rate: '',
            category: '',
            expectations: ''
        }
    };
    
    componentDidMount = () => {
        getCategories()
        .then(res => {
            const categories = []
            res.forEach(doc => {
                categories.push({id: doc.id, ...doc.data()})
                this.props.dispatchCategoriesHandler(categories)
            });
        }).catch(error => {
            alert(error.mesage);
        });
    };

    startButtonHandler = () => {
        this.setState({start: false, time: true});
    };

    setTimeHandler = () => {
        this.setState({time: false, textArea: true}) 
    };

    textAreaHandler = () => {
        this.setState({ textArea: false,finalize: true })
    };

    finalizeHandler = () => {
        const newIdea = {...this.state.ideaObj};
        saveIdea(newIdea);
        this.props.history.push({pathname: '/ideas'});
    };

    categoryInputHandler = event => {
        const copiedObj = {...this.state.newCategory};
        copiedObj.name = event.target.value;
        this.setState({newCategory: copiedObj})
    };

   inputChangeHandler = (event, inputIdentifier) => {
        const newIdea = {...this.state.ideaObj}
        newIdea[inputIdentifier] = event.target.value;  
        this.setState({ideaObj: newIdea})
    };

    toggleModalHandler = () => {
        this.setState(prevState => ({openModal: !prevState.openModal}));
    };

    addCategoryHandler = (event) => {
        event.preventDefault();
        addCategory(this.state.newCategory)
        .then(() => {
            this.props.newCategory(this.state.newCategory)
        }).catch(error => {
            alert(error.mesage)
        });
    };

    deleteCategoryHandler = (id) => {
        deleteCategory(id)
        .then(() => {
            const categoryIndex = this.props.categories.findIndex(el => el.id === id);
            this.props.dispatchDeleteCategory(categoryIndex);
        }).catch(error => {
            alert(error.mesage);
        });
    };

    render () {
        let forms = null;
        let button = <button onClick={this.startButtonHandler}>Start</button>;
       
        if (!this.state.start) {
            button = null;
             forms = <Forms 
                time={this.state.time}
                textArea={this.state.textArea}
                finalize={this.state.finalize}
                eventHandler={this.inputChangeHandler}
                timeClick={this.setTimeHandler}   
                textClick={this.textAreaHandler}
                finalizeClick={this.finalizeHandler}
                categories={this.props.categories}  
                add={this.addCategoryHandler} 
                change={this.categoryInputHandler} 
                show={this.state.openModal}
                delete={this.deleteCategoryHandler}
                toggleModal={this.toggleModalHandler}
                  />
        };
        return (
            <div className={classes.NewIdea}>
                <img src={background1} alt="background1"/>
                    {button}
                    {forms}
            </div>
        );    
    };
};

const mapStateToProps = state => {
    return {
        categories: state.ideas.categories 
    };
};

const dispatchPropsToState = dispatch => {
    return {
        dispatchCategoriesHandler: (cat) => dispatch({type: actionTypes.CATEGORIES, categories: cat}),
        newCategory: (cat) => dispatch({type: actionTypes.ADD_CATEGORY, newCategory: cat}),
        dispatchDeleteCategory: (index) => dispatch({type: actionTypes.DELETE_CATEGORY, index: index})
    };
};

export default connect(mapStateToProps, dispatchPropsToState) (NewIdea);