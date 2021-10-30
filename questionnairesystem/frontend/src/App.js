import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/layout/Header'
import Dashboard from './components/Dashboard'

const App = () => (
  <div>
    <Header />
    <Dashboard />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));