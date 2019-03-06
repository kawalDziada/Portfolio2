import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import MainPortfolio from './Components/MainPortfolio';
import About from './Components/About';


const history = createHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={MainPortfolio} exact={true}/>
                <Route path="/About" component={About}/>
            </Switch>
            </div>
        </Router>
    )
}

export default AppRouter