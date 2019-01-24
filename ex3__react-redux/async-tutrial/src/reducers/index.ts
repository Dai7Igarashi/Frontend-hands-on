/**
 * Reducers are called when action has been dispatched to store.
 */

import { combineReducers } from 'redux';
import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RootActions
} from '../actions';
import {
  Subreddit,
  Posts,
  RootState,
} from '../types';

const initialSubredditState: Subreddit = {
  subreddit: "reactjs",
}

const selectedSubreddit = (state: Subreddit = initialSubredditState, action: RootActions): Subreddit => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return {
        ...state,
        subreddit: action.subreddit
      };
    default:
      return state;
  }
}

const initialPostsState: Posts = {
  isFetching: false,
  didInvalidate: false,
  items: [],
}

const posts = (state: Posts = initialPostsState, action: RootActions): Posts => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return (
        {
          ...state,
          didInvalidate: true   /* overwitre ...state's didInvalidate(spred syntax). */
        }
      );
    case REQUEST_POSTS:
      return (
        {
          ...state,
          isFetching: true,
          didInvalidate: false
        }
      );
    case RECEIVE_POSTS:
      return (
        {
          ...state,
          isFetching: false,
          didInvalidate: false,
          items: action.items,
          lastUpdated: action.lastUpdated
        }
      );
    default:
      return state;
  }
}

const postsBySubreddit = (state: RootState = {}, action: RootActions): RootState => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return (
        {
          ...state,
          /* [variable(key)!]: value. '!'is non-null assertion operator. */
          [action.subreddit!]: posts(state[action.subreddit!], action)
        }
      );
    default:
      return state;
  }
}

export interface RootReducer {
  selectedSubreddit(): RootState;
  postsBySubreddit(): RootState;
}

const rootReducer = combineReducers({
  selectedSubreddit,
  postsBySubreddit
});

export default rootReducer;
