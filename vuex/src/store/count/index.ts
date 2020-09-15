import { CounterState, CounterStateDefaults } from './state';
import { Module } from 'vuex';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { RootState } from '..';
export { CounterGetters } from './getters';
export { CounterMutations } from './mutations';
export { CounterActions } from './actions';

export const count: Module<CounterState, RootState> = {
    state: Object.assign({}, CounterStateDefaults),
    getters,
    mutations,
    actions,
}