import { CountState, countStateDefaults } from './state';
import { Module } from 'vuex';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { RootState } from '..';

export const count: Module<CountState, RootState> = {
    state: Object.assign({}, countStateDefaults),
    getters,
    mutations,
    actions,
}