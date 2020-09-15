import { MutationTree } from 'vuex';
import { count } from '.';
import { CountState, countStateDefaults } from './state';

export const CountMuations = {
    setCount: '[count] commits mutation to count state',
    reset: '[count] reset count state to defaults',
}

export const mutations: MutationTree<CountState> = {
    [CountMuations.setCount]: (state: CountState, payload: number) => {
        state.count = payload;
    },
    [CountMuations.reset]: (state: CountState) => {
        Object.assign(state, countStateDefaults);
    },
};