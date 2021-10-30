import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/layout/Header'
import Alerts from './components/layout/Alerts'
import { Provider } from 'react-redux'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import store from './store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import EditRersponsePage from './pages/EditRersponsePage'
import CreateResponsePage from './pages/CreateResponsePage'

// Alert Options
const alertOptions = {
  timeout: 5000,
  position: 'top center'
}

const App = () => (
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} 
    {...alertOptions}>
      <>
      <Header />
      </>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/create' component={CreateResponsePage} />
          <Route exact path='/edit' component={EditRersponsePage} />
        </Switch>
      </Router>
    </AlertProvider>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'));