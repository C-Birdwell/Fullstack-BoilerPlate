import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  _createPostTitle,
  _createPostBody,
  _createPostPublished,
  _createPostAuthor,
  _createPostClear,
} from '../actions'

class FormPost extends React.Component {
  render() {
    const {
      _createPostTitle,
      _createPostBody,
      _createPostPublished,
      _createPostAuthor,
      _createPostClear,
      createPostTitle,
      createPostBody,
    } = this.props
    return (
      <div className="form-wrapper">
        <h2>Create Post</h2>
        <input
          type="text"
          value={createPostTitle}
          onChange={val => _createPostTitle(val.target.value)}
          placeholder="Title"
        />
        <textarea
          rows={4}
          value={createPostBody}
          onChange={val => _createPostBody(val.target.value)}
          placeholder="Body Content"
        />
        <button onClick={() => {}}>Create Post</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  createPostTitle: state.post.createPostTitle,
  createPostBody: state.post.createPostBody,
  createPostAuthor: state.post.createPostAuthor,
  createPostPublished: state.post.createPostPublished,
  loggedUser: state.user.loggedUser,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      _createPostTitle,
      _createPostBody,
      _createPostPublished,
      _createPostAuthor,
      _createPostClear,
    },
    dispatch,
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPost)
