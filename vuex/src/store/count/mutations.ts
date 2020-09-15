import { MutationTree } from 'vuex';
import { count } from '.';
import { CountState, countStateDefaults } from './state';

export const CountMutations = {
    setCount: '[count] commits mutation to count state',
    reset: '[count] reset count state to defaults',
}

export const mutations: MutationTree<CountState> = {
    [CountMutations.setCount]: (state: CountState, payload: number) => {
        state.count = payload;
    },
    [CountMutations.reset]: (state: CountState) => {
        Object.assign(state, countStateDefaults);
    },
};