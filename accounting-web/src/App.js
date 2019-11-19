import React from 'react';
import Login from "./pages/login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import Frame from "./pages/main";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/" render={() => <Redirect to="/login" replace/>}/>
                    <Route path="/index" component={Frame}/>
                </Switch>
            </BrowserRouter>
        )
    }
}


export default App;