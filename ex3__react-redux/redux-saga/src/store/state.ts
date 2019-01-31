/**
 * Structure of state(= rootReducer)
 * 
 * state {
 *  reddit_root_state: string,
 *  posts_root_state: {
 *    [key: string]: {
 *      isFetching: boolean,
 *      lastUpdated: number,
 *      items: Array<any>,
 *    },
 *    [key: string]: {
 *      ...
 *    },
 *    ...
 *  },
 * }
 */

export type TYPE_OF_REDDIT = string;

export interface Reddit {
  reddit: TYPE_OF_REDDIT;
}

export interface Post<T> {
  isFetching: boolean;
  items?: T;
  lastUpdated?: number;
}

export type TYPE_POST = any[];

export interface Posts {
  [key: string]: Post<TYPE_POST>;
}

export interface RootState {
  reddit_root_state: TYPE_OF_REDDIT;
  posts_root_state: Posts;
}