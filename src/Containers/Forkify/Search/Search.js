import React, { Component } from 'react';
import axios from 'axios';
import classes from './Search.module.css'
import SearchResults from '../../../components/Forkify/Search/SearchResults/SearchResults';
import SearchResult from '../../../components/Forkify/Search/SearchResult/SearchResult';
import SideDrawer from '../../../components/Forkify/Navigation/SideDrawer/SideDrawer';
import SideDrawerR from '../../../components/Forkify/Navigation/SideDrawer/SideDrawerR/SideDrawerR';


class Search extends Component {
    state = {
        id: null,
        servings: 4,
        isMobile: false
    }
    changeId = (event) => {
        event.preventDefault()
        const id = event.target.parentNode.parentNode.parentNode.id
        this.setState({id: id,
                    isMobile: false})
                    this.props.false()
        
    }
    componentDidMount() {
        this.setState({width: window.innerWidth})
    }
    componentDidUpdate (prevProps, prevState) {
        if(prevState.id !== this.state.id) {
            
            axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${this.state.id}`)
            .then(res => {
            
                const time = Math.ceil(res.data.recipe.ingredients.length / 3);
                const prepare = time * 15;
                this.setState({recipe: res.data.recipe,
                                prepareTime: prepare})})
        }
    }
    
    openDrawerHandler = () => {
        this.setState({isMobile: true})
    }

    closeDrawerHandler = () => {
        this.setState({isMobile: false})
    }

    addServingsHandler = () => {
        const oldState = {...this.state}
        const newServings = oldState.servings + 1;
        this.setState({servings: newServings})
    }

    reduceServingsHandler = () => {
        const oldState = {...this.state}
        if(oldState.servings > 1) {
            const newServings = oldState.servings - 1;
            this.setState({servings: newServings})
        }
     
    };

    handleResize = () => {
        this.setState({width: window.innerWidth})
    }
    
    render () { 
        window.addEventListener('resize', this.handleResize)
        if ( this.state.width <= 768){
            if (this.state.isMobile || this.props.mobile) {
                return (
                    <div className = {classes.Search}>
                        <SideDrawer open={this.state.isMobile}>
                        <SearchResults
                            closeDrawer={this.closeDrawerHandler}
                            recipes={this.props.result}
                            page={this.props.page}
                            pageNum={this.props.pageNum}
                            idHandler={ this.changeId}/>
                        </SideDrawer>
                        <SearchResult time={this.state.prepareTime} recipe={this.state.recipe} servings={this.state.servings} add={this.addServingsHandler} reduce={this.reduceServingsHandler}/>
                        <SideDrawerR>
                        <SearchResults 
                            closeDrawer={this.closeDrawerHandler}
                            recipes={this.props.result}
                            page={this.props.page + 1}
                            pageNum={this.props.pageNum}
                            next={this.props.next}
                            prev={this.props.prev}
                            idHandler={ this.changeId}/>
                        </SideDrawerR>
                    </div>
                )
            } else { 
                return (
                    <div className={classes.Search}>
                        <button 
                        onClick={this.openDrawerHandler} 
                        style={{ position: 'absolute',top: '80px',left: '8px'}}><ion-icon name="reorder-four-outline"></ion-icon></button>
                        
                        <SearchResult time={this.state.prepareTime} recipe={this.state.recipe} servings={this.state.servings} add={this.addServingsHandler} reduce={this.reduceServingsHandler}/>
                        <div style={{display: 'none'}}>
                            <SideDrawer />
                        </div>
                    </div>
                  
                )
            } 
          } 
        else {
            return (
                <div className = {classes.Search}>
                    <SearchResults
                        recipes={this.props.result}
                        page={this.props.page}
                        pageNum={this.props.pageNum}
                        next={this.props.next}
                        prev={this.props.prev}
                        idHandler={ this.changeId}/>
                    <SearchResult time={this.state.prepareTime} recipe={this.state.recipe} servings={this.state.servings} add={this.addServingsHandler} reduce={this.reduceServingsHandler}/>
                    <SearchResults 
                        recipes={this.props.result}
                        page={this.props.page + 1}
                        pageNum={this.props.pageNum}
                        next={this.props.next}
                        prev={this.props.prev}
                        idHandler={ this.changeId}/>
                        
                </div>
              );
        }
       
   }
}

export default Search;