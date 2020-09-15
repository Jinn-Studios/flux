import { MutationTree } from 'vuex';
import { count } from '.';
import { CounterState, CounterStateDefaults } from './state';

export const CounterMutations = {
    setCount: '[counter] commits mutation to count state',
    reset: '[counter] reset count state to defaults',
}

export const mutations: MutationTree<CounterState> = {
    [CounterMutations.setCount]: (state: CounterState, payload: number) => {
        state.count = payload;
    },
    [CounterMutations.reset]: (state: CounterState) => {
        Object.assign(state, CounterStateDefaults);
    },
};