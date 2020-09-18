import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';
import classes from './ViewIdeas.module.css';
import Spinner from '../../../UI/Spinner/Spinner';
import SingleIdea from '../../../components/Ideas/SingleIdea/SingleIdea';
import Ideas from '../../../components/Ideas/Ideas/Ideas';
import { deleteIdea, getIdeas, updateIdea } from '../../../Services/dbHelper';


class ViewIdeas extends Component {
    
    state = {
        singleIdeaDisplay: false,
        editIdea: false,
        loading: true,
    };
  
   componentDidMount () {
    getIdeas()
        .then(res => {
   
        const ideas = [];
        res.forEach(doc => {
        ideas.push({id: doc.id, ...doc.data()});
      });

        this.props.onResponseHandler(ideas)
        this.setState({loading: false})
    });       
    };

    inputChangeHandler = (event, inputIdentifier) => {
        const newIdea = {...this.state.selectedIdea}
        newIdea[inputIdentifier] = event.target.value;  
        this.setState({selectedIdea: newIdea});
    };

    displayIdeaHandler = (event) => {
        const ideaIndex = this.props.ideas.findIndex(el => el.id === event.target.id)
        this.setState({selectedIdea: this.props.ideas[ideaIndex], singleIdeaDisplay: true});
    };

    editIdeaHandler = () => {
        this.setState({editIdea: true,
                        ideaObj: this.props.ideas})
    };

    deleteIdeaHandler = (id) => {
        this.setState({loading: true, singleIdeaDisplay: false})
        deleteIdea(id).then(() => {
            this.setState({loading: false})
            const ideaIndex = this.props.ideas.findIndex(el => el.id === id)
            this.props.dispatchDeleteHandler(ideaIndex)
        });
    };
  
    goBackHandler = () => {
        this.setState({singleIdeaDisplay: false, editIdea: false})
    };

    submitEditedHandler = (id, idea) => {
        this.setState({loading: true, singleIdeaDisplay: false})
        updateIdea(id, idea)
         .then(() => {
                const ideaIndex = this.props.ideas.findIndex(el => el.id === id)
                this.props.editIdeaHandler(ideaIndex, idea)
              });        
                this.setState({loading: false, editIdea: false})
    };

    render () {
        let display = <Ideas ideas={this.props.ideas} click={this.displayIdeaHandler}/>
        if (this.state.loading) {
            display = <Spinner />
        };
        if (this.state.singleIdeaDisplay) {
            display = <SingleIdea 
            edit={this.editIdeaHandler} 
            delete={this.deleteIdeaHandler} 
            editIdea={this.state.editIdea} 
            ideas={this.state.selectedIdea} 
            back={this.cancelEditHandler}
            click={this.goBackHandler}
            change={this.inputChangeHandler}
            submit={this.submitEditedHandler}/>
        };
        return (
            <div className={classes.ViewIdeas}>
                 {display}
            </div>
        )
    };
};

const mapStateToProps = state => {
        return {
            ideas: state.ideas.ideas
  };
};

const connectDispatchToProps = dispatch => {
    return {
        editIdeaHandler: (index, newIdea) => dispatch({type: actionTypes.EDIT, index: index, newIdea}),
        dispatchDeleteHandler: (index) => dispatch({type: actionTypes.DELETE, index: index}),
        onResponseHandler: (ideas) => dispatch({type: actionTypes.IDEAS, ideas: ideas})
    };
};

export default connect(mapStateToProps, connectDispatchToProps)(ViewIdeas);