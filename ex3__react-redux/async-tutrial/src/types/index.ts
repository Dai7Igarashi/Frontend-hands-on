export type TYPE_SUBREDDIT = string;

export interface Subreddit {
  subreddit?: TYPE_SUBREDDIT;
}

export interface Posts {
  isFetching?: boolean;
  didInvalidate?: boolean;
  items?: [];
  lastUpdated?: number;
}

/**
 * in ../reducers:
 * 
 * myReducer(state: RootState, action) can refer the state in store as below.
 * state:
 *   - subreddit: string;
 *   - isFetching: boolean;
 *   - didInvalidate: boolean;
 *   - items: [];
 *   - lastUpdated: number;
 */
export type RootState = Subreddit & Posts;
