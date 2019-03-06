import React, { Component } from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';

import NavBar from './Components/NavBar'
import About from './Components/About';
import MainPortfolio from './Components/MainPortfolio';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={MainPortfolio} />
            <Route path="/About" component={About} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
