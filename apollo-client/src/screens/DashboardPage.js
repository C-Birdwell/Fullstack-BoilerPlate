import React from 'react'
import ApolloBoost, { gql } from 'apollo-boost'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { _flagNewUser } from '../actions'
import FormLogin from '../components/FormLogin'
import FormCreateUser from '../components/FormCreateUser'

class DashboardPage extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    console.log(token)
  }

  render() {
    const { _flagNewUser, flagNewUser } = this.props
    return (
      <div>
        <div>
          {!flagNewUser ? <FormLogin /> : <FormCreateUser />}
          <button onClick={() => _flagNewUser(!flagNewUser)}>New User?</button>
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
