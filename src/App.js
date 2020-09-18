import React from 'react';
import { Route } from 'react-router-dom';
//import Home from './components/Home/Home';
import NewHomePage from './components/NewHomePage/NewHomePage';
import TicTacToe from './Containers/TicTacToe/TicTacToe';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Search from './Containers/MoviesContainer/Search/Search';
import Forkify from './Containers/Forkify/Forkify';
import Checkout from './Containers/BurgerBuilder/Checkout/Checkout';
import Orders from './Containers/BurgerBuilder/Checkout/Orders/Orders';
import Skills from './Containers/Home/Skills/Skills';
import Ideas from './Containers/Ideas/Ideas';
import LiveScore from './Containers/LiveScore/LiveScore';
import LivescoreTeams from './Containers/LiveScore/LivescoreTeams/LivescoreTeams';


function App() {
  return (
    <div>
       <Route path="/" exact component={NewHomePage} />
      {/*<Home /> */}
      <Route path="/tic_tac_toe" component={TicTacToe}/>
      <Route path="/burger-builder" exact component={BurgerBuilder}/>
      <Route path="/burger-builder/checkout" component ={Checkout} />
      <Route path="/movies" component={Search} />
      <Route path="/forkify" component={Forkify} />
      <Route path="/burger-builder/orders" component={Orders} />
      <Route path="/skills" component={Skills} />
      <Route path="/ideas" component={Ideas} />
      <Route path="/live-score" exact component={LiveScore} />
      <Route path="/live-score/teams" component={LivescoreTeams} />
    </div>
     

  );
}

export default App;
