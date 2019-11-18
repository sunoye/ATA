import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppStore from "./store";
import {Provider} from "mobx-react";
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import {LocaleProvider} from "antd";
import {BrowserRouter} from "react-router-dom";

let store = {}
store['app'] = new AppStore()

ReactDOM.render(
    <BrowserRouter>
        <LocaleProvider locale={zh_CN}>
            <Provider {...store}>
                <App/>
            </Provider>
        </LocaleProvider>
    </BrowserRouter>
    , document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
