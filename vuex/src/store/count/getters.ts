import { GetterTree } from 'vuex';
import { RootState } from '..';
import { CountState } from './state';

export const CountGetters = {
    count: '[count] returns count state as computed property',
};

export const getters: GetterTree<CountState, RootState> = {
    [CountGetters.count]: ({ count }: CountState) => count,
}