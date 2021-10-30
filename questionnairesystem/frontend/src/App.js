import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/layout/Header'
import Dashboard from './components/Dashboard'
import { Provider } from 'react-redux'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Header />
    <Dashboard />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'));