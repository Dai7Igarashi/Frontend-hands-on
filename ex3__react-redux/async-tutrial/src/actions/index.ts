import {
  Subreddit, TYPE_SUBREDDIT,
  Posts,
} from '../types';
import { Dispatch } from 'redux';

/* App.tsx */

// TO reuse calling from reducers as type.
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

type TYPE_SELECT_SUBREDDIT = typeof SELECT_SUBREDDIT;  // type is string
type TYPE_INVALIDATE_SUBREDDIT = typeof INVALIDATE_SUBREDDIT;  // type is string
type TYPE_REQUEST_POSTS = typeof REQUEST_POSTS;  // type is string
type TYPE_RECEIVE_POSTS = typeof RECEIVE_POSTS;  // type is string


/* Declar as Interface */
interface SelectSubreddit extends Subreddit {
  type: TYPE_SELECT_SUBREDDIT;
}

export const selectSubreddit = (subreddit: TYPE_SUBREDDIT): SelectSubreddit => {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

/* Declar as Type Alias */
type InvalidateType = {
  type: TYPE_INVALIDATE_SUBREDDIT;
}

type InvalidateSubreddit = InvalidateType & Subreddit;

export const invalidateSubreddit = (subreddit: TYPE_SUBREDDIT): InvalidateSubreddit => {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

/* Declar with Interface & Type Alias */
interface RequestType {
  type: TYPE_REQUEST_POSTS;
}

type RequestPosts = RequestType & Subreddit;

export const requestPosts = (subreddit: TYPE_SUBREDDIT): RequestPosts => {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

/* Declar with Interface */
interface ReceivePosts extends Subreddit, Posts {
  type: TYPE_RECEIVE_POSTS;
}

export const receivePosts = (subreddit: TYPE_SUBREDDIT, json: any): ReceivePosts => {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    items: json.data.children.map((child: any) => child.data),
    lastUpdated: Date.now()
  }
}

type SubredditActions = SelectSubreddit | InvalidateSubreddit;
type PostActions = RequestPosts | ReceivePosts;

export type RootActions = SubredditActions | PostActions;  /* Called from reducers */
 
const fetchPosts = (subreddit: TYPE_SUBREDDIT) => {
  return (dispatch: Dispatch<PostActions>) => {
    dispatch(requestPosts(subreddit));
    return (
      fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        return dispatch(receivePosts(subreddit, json));
      })
    );
  };
}

const shouldFetchPosts = (state: any, subreddit: TYPE_SUBREDDIT): boolean => {
  const posts: Posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate!;
}

export const fetchPostsIfNeeded = (subreddit: TYPE_SUBREDDIT) => (dispatch: any, getState: any) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit));
  }
}