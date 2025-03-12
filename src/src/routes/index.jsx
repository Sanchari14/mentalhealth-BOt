import Nav from '../pages/Nav';
import Why from '../pages/Why';
import Home from '../pages/Home';
import Developers from '../pages/Developers';
import Footer from '../pages/Footer';

import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import  PageTemplate  from '../components/templates/PageTemplate';

// import Home from '../pages/Home';
import Chatbot from '../pages/Chatbot';
export const history = createBrowserHistory();



const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
         <PageTemplate>
            <Route path="/" exact component={Home}/>
            <Route path="/why" component={Why}/>
            <Route path="/Developers" component={Developers}/>
            
            <Route path="/chatbot" component={Chatbot}/>
         </PageTemplate>
      </Switch>

    </Router>
  );
};

export default Routes;