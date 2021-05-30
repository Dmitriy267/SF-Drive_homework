import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AboutApp from './AboutApp';
import RegistrationApp from './RegistrationApp';
import  QuestionApp from './QuestionApp';
function RoutingApp (){
    return (
        <Router>
        <div>
        <nav>
        <ul>
        <li><Link to="/">О нас</Link></li>
        <li><Link to="/условия">Условия</Link></li>
        <li><Link to="/частые вопросы">Частые вопросы</Link></li>
        </ul>
        </nav>
       
        <Switch>
        <Route path="/условия">
        <RegistrationApp/>
        </Route>
        <Route path="/частые вопросы">
        <QuestionApp/>
        </Route>
        <Route path="/">
        <AboutApp/>
        </Route>
        </Switch>
        </div>
        </Router>
        
    )
}

export default RoutingApp;