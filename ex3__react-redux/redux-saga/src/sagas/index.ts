import {
  take,  // Being called when action is dispached.
  put,  // Dispatch an action.
  call,  // Being called after process of Promise is end.
  fork,  // Create new async process like "thread".
  select  // Get the state data from store.
} from 'redux-saga/effects';
import * as fetch from 'isomorphic-fetch';
import * as actions from '../actions';
import {
  selectedRedditSelector,
  postsByRedditSelector
} from '../selectors';
import { TYPE_OF_REDDIT } from '../store/state';

export const fetchPostsApi = (reddit: TYPE_OF_REDDIT): Promise<any> => {
  return fetch(`https://www.reddit.com/r/${reddit}.json`)
          .then((resp: any) => resp.json())
          .then((json: any) => json.data.children.map((child: any) => child.data))
}

export const fetchPosts = function* (reddit: TYPE_OF_REDDIT) {
  /**
   * dispatch requestPostsAction to store.
   * After dispatched the action, specific reducer is called.
   */ 
  yield put(actions.requestPostsActionCreater(reddit));
  /**
   * call(function, arg<Array>)
   * => function(..arg)
   * 
   * After process of Promise is end,
   * datas are substituted for variable "articles".
   */
  const articles = yield call(fetchPostsApi, reddit);
  /**
   * dispatch receivePostsAction to store.
   * After dispatched the action, specific reducer is called.
   */ 
  yield put(actions.receivePostsActionCreater(reddit, articles));
}

export const invalidateReddit = function* () {
  while (true) {
    /** 
     * wait until invalidateRedditAction is dispatched(= puted).
     * called from containers/App.tsx.
     */
    const { reddit } = yield take(actions.INVALIDATE_REDDIT);
    yield call(fetchPosts, reddit);
  }
}

export const nextRedditChange = function* () {
  while (true) {
    // Get the data(= reddit: string).
    const prevReddit = yield select(selectedRedditSelector);
    /**
     * wait until selectRedditAction is dispatched(= puted).
     * called from containers/App.tsx.
     */
    yield take(actions.SELECT_REDDIT);
    // Get the data(= reddit: string)
    const newReddit = yield select(selectedRedditSelector);

    const postsState = yield select(postsByRedditSelector);
    /**
     * If reddit name is changed and still not fetch postsState[newReddit],
     * fetching new process is forked.
     */
    if (prevReddit !== newReddit && !postsState[newReddit]) {
      yield fork(fetchPosts, newReddit);
    }
  }
}

/* Initial process when first access the page */
export const startup = function* () {
  const selectedReddit = yield select(selectedRedditSelector);
  yield fork(fetchPosts, selectedReddit);
}

/* All forked tasks start at begining. */
const root = function* () {
  yield fork(startup);
  yield fork(nextRedditChange);
  yield fork(invalidateReddit);
}

export default root;
