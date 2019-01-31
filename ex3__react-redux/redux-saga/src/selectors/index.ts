import { RootState } from '../store/state';

/* return => reddit: string; */
export const selectedRedditSelector = (state: RootState) => state.reddit_root_state;

/**
 * return =>
 *  [key: string]: {
 *    isFetching: boolean,
 *    lastUpdated: number,
 *    items: Array<any>,
 *  },
 *  ...
 */
export const postsByRedditSelector = (state: RootState) => state.posts_root_state;
