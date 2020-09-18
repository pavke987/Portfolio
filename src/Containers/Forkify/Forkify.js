import React, { Component } from 'react';
import axios from 'axios';
import classes from './Forkify.module.css';
import Header from '../../components/Forkify/Header/Header';
import Search from './Search/Search';
import SearchList from '../../components/Forkify/Search/SearchList/SearchList';
import Spinner from '../../UI/Spinner/Spinner';
import ForkifyLayout from '../../hoc/Layout/ForkifyLayout/ForkifyLayout';

class Forkify extends Component {
    state = {
        isLoaded: false, 
        page: 1, 
        pageNumber: 0,
        query: 'Pork',
        inputQuery: '', 
        id:'#',
        isMobile: false, 
        queryList: false,     
    }
        componentDidMount() {
            axios.get(`https://forkify-api.herokuapp.com/api/search?q=${this.state.query}`)
            .then(
            (result) =>  { 
               
                const pageNum = Math.ceil(result.data.recipes.length / 10)
                this.setState({isLoaded: true,
                                recipes: result.data.recipes,
                                pageNumber: pageNum
                            });      
                                       
                },
                (error) => {
                    this.setState({
                        isLoaded:true,
                        error
                    })
                }
            )         
    };

    componentDidUpdate (prevProps, prevState) {
        if (this.state.query !== prevState.query){
                axios.get(`https://forkify-api.herokuapp.com/api/search?q=${this.state.query}`)
                .then(result => {
                    const pageNum = Math.ceil(result.data.recipes.length / 10)
                    this.setState({recipes: result.data.recipes,
                                    pageNumber: pageNum,
                                    })
                                   
            })    
    };
       

};
    clearInputHandler = () => {
        this.setState({queryList: true,
                        inputQuery: ''})
    };
    submitHandler = (event) => {
        event.preventDefault()
        const newState = {...this.state}
        const newQuery= newState.inputQuery  
        this.setState({query: newQuery,
                        isMobile: true,
                        queryList: false})  
    };
    submitListItemHandler = (event) => {
        const newQuery = event.target.textContent
        this.setState({inputQuery: newQuery})
    }

    getInputHandler = (event) => {
        this.setState({inputQuery: event.target.value})
    };
    nextPageHandler = () => {
        this.setState( {page: this.state.page + 1})
    };
    prevPageHandler = () => {
        this.setState({page: this.state.page - 1})
    };
    
    isMobileHandler = () => {
        this.setState({isMobile: true})
    }
    notMobileHandler = () => {
        this.setState({isMobile: false})
    }
    render() {
        const {error, isLoaded, recipes} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>
        }
        else if(!isLoaded) {
            return <Spinner />
        } else {
            if(!this.state.queryList) {
                return (
                    <ForkifyLayout>
                        <div className={classes.Forkify}>
                            <Header 
                                isMob={this.notMobileHandler}
                                clear={this.clearInputHandler}
                                desValue={this.state.inputQuery}
                                subm={this.submitHandler}
                                change={this.getInputHandler}/>
                            <Search 
                                false={this.notMobileHandler}
                                mobile={this.state.isMobile}                        
                                result={recipes} 
                                page={this.state.page} 
                                next={this.nextPageHandler}
                                prev={this.prevPageHandler}
                                pageNum={this.state.pageNumber}                                 
                                />
                                <div style={{display: 'none'}}>
                                <SearchList anim={this.state.queryList} />
                                </div>
                        </div>
                    </ForkifyLayout>
                   
                     );
            } else if (this.state.queryList) {
              return (
                  <ForkifyLayout>
                    <div className={classes.Forkify}>
                        <Header 
                            isMob={this.notMobileHandler}
                            clear={this.clearInputHandler}
                            desValue={this.state.inputQuery}
                            subm={this.submitHandler}
                            change={this.getInputHandler}/>
                    <SearchList anim={this.state.queryList} click={this.submitListItemHandler}/> 
                    </div>
                  </ForkifyLayout>
             
              );            
            }
           
           
        } 
    };
}
export default Forkify;
