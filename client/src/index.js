import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddlwere from 'redux-saga'
import { rootReducer } from './redux/rootReducer'
import { sagaWatcher } from './redux/sagas'

const saga = createSagaMiddlwere()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

saga.run(sagaWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
