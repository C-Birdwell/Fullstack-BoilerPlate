import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { _flagNewUser } from '../actions'
import FormLogin from '../components/FormLogin'
import FormCreateUser from '../components/FormCreateUser'

class DashboardPage extends React.Component {
  renderHead() {
    return (
      <Helmet>
        <title>Boilerplate - Dashboard Page</title>
      </Helmet>
    )
  }

  render() {
    const { _flagNewUser, flagNewUser } = this.props
    return (
      <div>
        {this.renderHead()}
        <div className="row">
          <div className="col-1" />
          <div className="col-3">
            {!flagNewUser ? <FormLogin /> : <FormCreateUser />}
            <button onClick={() => _flagNewUser(!flagNewUser)}>New User?</button>
          </div>
          <div className="col-1" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ flagNewUser: state.visualFlags.flagNewUser })

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ _flagNewUser }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
