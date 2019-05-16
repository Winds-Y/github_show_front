import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Home from './components/Home'
import UserList from './components/UserList';

ReactDOM.render(
    (
        <BrowserRouter>
            <div>
                <Route path={'/'} component={Home}/>
                <Route path={'/Page1'} component={Page1}/>
                <Route path={'/Page2'} component={Page2}/>
                <Route path={'/Page3'} component={Page3}/>
                <Route path={'/UserList'} component={UserList}/>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
