import './assets/styles/base/base.scss'

import { applyMiddleware, createStore } from "redux"

import App from "./components/app";
import { Provider } from "react-redux"
import React from "react"
import ReactDOM from 'react-dom'
import {
    composeWithDevTools
} from 'redux-devtools-extension'
import createSagaMiddleware from "redux-saga"
import reducers from "./reducers"
import sagas from "./sagas"

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(sagas)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
