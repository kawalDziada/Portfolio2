import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';

import NavBar from './Components/NavBar'
import About from './Components/About';
import MainPortfolio from './Components/MainPortfolio';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
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
        <iframe src="https://tokbox.com/embed/embed/ot-embed.js?embedId=33ce89a8-6a4c-407f-81e1-20db465d6c54&room=DEFAULT_ROOM&iframe=true" width="800px" height="640px" scrolling="auto" allow="microphone; camera" ></iframe>
      </Fragment>
    );
  }
}

export default App;
