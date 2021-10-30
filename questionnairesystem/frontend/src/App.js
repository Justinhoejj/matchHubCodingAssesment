import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/layout/Header'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import EditRersponsePage from './pages/EditRersponsePage'
import CreateResponsePage from './pages/CreateResponsePage'


const App = () => (
  <Provider store={store}>
    <Header />
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/create' component={CreateResponsePage} />
        <Route exact path='/edit' component={EditRersponsePage} />
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'));