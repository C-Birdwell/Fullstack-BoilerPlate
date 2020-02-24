import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { _createUserUsername, _createUserPassword, _createUserEmail } from '../actions'
import { _MutateCreateUser } from '../resolvers'

class FormCreateUser extends React.Component {
  render() {
    const {
      _createUserUsername,
      _createUserPassword,
      _createUserEmail,
      createUserUsername,
      createUserPassword,
      createUserEmail,
    } = this.props
    return (
      <div>
        <h2>Create User</h2>
        <input
          type="text"
          value={createUserUsername}
          onChange={val => _createUserUsername(val.target.value)}
          placeholder="User Name"
        />
        <input
          type="text"
          value={createUserPassword}
          onChange={val => _createUserPassword(val.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          value={createUserEmail}
          onChange={val => _createUserEmail(val.target.value)}
          placeholder="Email"
        />
        <button
          onClick={() => _MutateCreateUser(createUserUsername, createUserEmail, createUserPassword)}
        >
          Create New User
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userID: state.user.userID,
  createUserUsername: state.user.createUserUsername,
  createUserPassword: state.user.createUserPassword,
  createUserEmail: state.user.createUserEmail,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ _createUserUsername, _createUserPassword }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateUser)
