import { GetterTree } from 'vuex';
import { RootState } from '..';
import { CounterState } from './state';

export const CounterGetters = {
    count: '[counter] returns count state as computed property',
};

export const getters: GetterTree<CounterState, RootState> = {
    [CounterGetters.count]: ({ count }: CounterState) => count,
}