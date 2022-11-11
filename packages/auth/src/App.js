import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import Signup from './components/Signup';
import Signin from './components/Signin';
// import Landing from './components/Landing';
// import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})
export default ({history, onSignIn}) => {
    return (<div> 
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
            <Switch>
                <Route exact path='/auth/signin' >
                    <Signin onSignIn={onSignIn}/>
                </Route>
                <Route exact path='/auth/signup'>
                    <Signup onSignIn={onSignIn}/>
                </Route>
            </Switch>
            </Router>
        </StylesProvider>
    </div>)
} 