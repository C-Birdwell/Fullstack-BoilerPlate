import {
  POSTS,
  CREATE_POST_TITLE,
  CREATE_POST_BODY,
  CREATE_POST_PUBLISHED,
  CREATE_POST_AUTHOR,
  CREATE_POST_CLEAR,
} from '../typeDefs'

export const _getAllPosts = payload => ({
  type: POSTS,
  payload,
})

export const _createPostTitle = payload => ({
  type: CREATE_POST_TITLE,
  payload,
})

export const _createPostBody = payload => ({
  type: CREATE_POST_BODY,
  payload,
})

export const _createPostPublished = payload => ({
  type: CREATE_POST_PUBLISHED,
  payload,
})

export const _createPostAuthor = payload => ({
  type: CREATE_POST_AUTHOR,
  payload,
})

export const _createPostClear = () => ({
  type: CREATE_POST_CLEAR,
})
