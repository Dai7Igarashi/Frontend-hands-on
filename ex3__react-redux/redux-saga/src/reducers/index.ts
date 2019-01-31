import { combineReducers } from 'redux';
import {
  SELECT_REDDIT, REQUEST_POSTS, RECEIVE_POSTS,
  RedditActionType, PostsActionType
} from '../actions';
import {
  Post, Posts,
  TYPE_OF_REDDIT, TYPE_POST
} from '../store/state';

/* Reddit reducer */
const initialSelectedReddit = 'reactjs';
type initSelect = typeof initialSelectedReddit;

const selectedRedditReducer = (state: initSelect = initialSelectedReddit, action: RedditActionType): TYPE_OF_REDDIT => {
  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit;
    default:
      return state;
  }
}

/* Posts reducer */
const initialPosts = {
  isFetching: false,
  items: []
}

const postsReducer = (state: Post<TYPE_POST> = initialPosts, action: PostsActionType): Post<TYPE_POST> => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.articles,
        lastUpdated: action.receivedAt,
      }
    default:
      return state;
  }
}

type postsByRedditState = Posts | undefined; 

const postsByRedditReducer = (state: postsByRedditState = {}, action: PostsActionType): Posts => {
  switch (action.type) {
    // If action.type === REQUEST_POSTS or RECEIVE_POSTS.
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.reddit]: postsReducer(state[action.reddit], action)
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reddit_root_state: selectedRedditReducer,
  posts_root_state: postsByRedditReducer
});

export default rootReducer;
