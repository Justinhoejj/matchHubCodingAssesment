import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/layout/Header'
import Dashboard from './components/Dashboard'
import CreateResponsePage from './pages/CreateResponsePage'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"

const App = () => (
    <Provider store={store}>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/create' component={CreateResponsePage} />
        </Switch>
      </Router>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'));