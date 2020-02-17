import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import DashboardPage from '../screens/DashboardPage'
import HelpPage from '../screens/HelpPage'
import NotFoundPage from '../screens/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        {/* 
        <Route path="/edit/:id" component={EditExpensePage} />
        */}
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
