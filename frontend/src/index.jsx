import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

// Multi e Thunk

/* o multi é um middlere retorna um array de actions ao inves de apenas um type e um payload.
   Esse array é disparado assincronamente, ou seja, não há um controle da ordem da execução.
   No nosso caso, é preciso usar o thunk para esperar o request e só depois chamar o search */

// Promise

/* Sempre que é retornado uma promise dentro da action lá no payload, este middleware espera a promise ser
   resolvida pra só ai ele disparar os reducers. Quando chega no reducer, o payload.data está pronto */

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'))