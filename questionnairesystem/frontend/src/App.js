import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/layout/Header'
import Dashboard from './components/Dashboard'
import CreateResponsePage from './pages/CreateResponsePage'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import EditRersponsePage from './pages/EditRersponsePage'

const App = () => (
    <Provider store={store}>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/create' component={CreateResponsePage} />
          <Route exact path='/edit' component={EditRersponsePage} />
        </Switch>
      </Router>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'));