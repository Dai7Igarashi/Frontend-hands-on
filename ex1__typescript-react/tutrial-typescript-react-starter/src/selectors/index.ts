import { RootState } from '../state';

export const helloSelector = (state: RootState) => state.greeting.hello;
export const goodbySelector = (state: RootState) => state.greeting.goodby;
