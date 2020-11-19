import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import {CounterContainer} from "./components/Containers/Container"
import {Provider} from "react-redux";
import store from './redux/state';

ReactDOM.render(
    <Provider store={store}>
      <CounterContainer/>
    </Provider>,
    document.getElementById('root'))
