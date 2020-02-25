import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import DashboardPage from '../screens/DashboardPage'
import HelpPage from '../screens/HelpPage'
import NotFoundPage from '../screens/NotFoundPage'
import ProtectedPage from '../screens/ProtectedPage'
import Header from '../components/Header'

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact>
              {this.props.loggedUser ? <ProtectedPage /> : <DashboardPage />}
            </Route>
            <Route path="/works" />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  loggedUser: state.user.loggedUser,
})

export default connect(mapStateToProps)(AppRouter)
