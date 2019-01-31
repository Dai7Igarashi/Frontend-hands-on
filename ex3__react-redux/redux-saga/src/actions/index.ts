import {
  Reddit, TYPE_OF_REDDIT,
  TYPE_POST
} from '../store/state';

/* Select action */
export const SELECT_REDDIT = 'SELECT_REDDIT';
type TYPE_SELECT_REDDIT = typeof SELECT_REDDIT;
/* Invalidate action */
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';
type TYPE_INVALIDATE_REDDIT = typeof INVALIDATE_REDDIT;
/* Request action */
export const REQUEST_POSTS = 'REQUEST_POSTS';
type TYPE_REQUEST_POSTS = typeof REQUEST_POSTS;
/* Receive action */
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
type TYPE_RECEIVE_POSTS = typeof RECEIVE_POSTS;

/* Select action creater */
interface SelectReddit extends Reddit {
  type: TYPE_SELECT_REDDIT;
}

export const selectRedditActionCreater = (reddit: TYPE_OF_REDDIT): SelectReddit => {
  const action: any = {
    type: SELECT_REDDIT,
    reddit: reddit
  };
  return action;
}

/* Invalidate action creater */
type InvalidateReddit = {
  type: TYPE_INVALIDATE_REDDIT;
} & Reddit;

export const invalidateRedditActionCreater = (reddit: TYPE_OF_REDDIT): InvalidateReddit => {
  return (
    {
      type: INVALIDATE_REDDIT,
      reddit
    }
  );
}

// Reddit action type
export type RedditActionType = SelectReddit | InvalidateReddit;

/* Request action creater */
interface RequestPosts extends Reddit {
  type: TYPE_REQUEST_POSTS;
}

export const requestPostsActionCreater = (reddit: TYPE_OF_REDDIT): RequestPosts => {
  return {
    type: REQUEST_POSTS,
    reddit
  }
}

/* Receive action creater */
interface ReceivePosts extends Reddit{
  type: TYPE_RECEIVE_POSTS;
  articles: TYPE_POST;
  receivedAt: number;
}

export const receivePostsActionCreater = (reddit: TYPE_OF_REDDIT, articles: TYPE_POST): ReceivePosts => ({
  type: RECEIVE_POSTS,
  reddit,
  articles,
  receivedAt: new Date().setMilliseconds(0)
});

// Posts action type
export type PostsActionType = RequestPosts | ReceivePosts;