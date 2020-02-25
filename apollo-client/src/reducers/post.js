import {
  POSTS,
  CREATE_POST_TITLE,
  CREATE_POST_BODY,
  CREATE_POST_PUBLISHED,
  CREATE_POST_AUTHOR,
  CREATE_POST_CLEAR,
} from '../typeDefs'

const INITIAL_STATE = {
  posts: [],
  createPostTitle: '',
  createPostBody: '',
  createPostAuthor: '',
  createPostPublished: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS:
      return { ...state, posts: action.payload }

    case CREATE_POST_TITLE:
      return { ...state, createPostTitle: action.payload }

    case CREATE_POST_BODY:
      return { ...state, createPostBody: action.payload }

    case CREATE_POST_AUTHOR:
      return { ...state, createPostAuthor: action.payload }

    case CREATE_POST_PUBLISHED:
      return { ...state, createPostPublished: action.payload }

    case CREATE_POST_CLEAR:
      return Object.assign(...state, delete INITIAL_STATE.posts)

    default:
      return { ...state }
  }
}
