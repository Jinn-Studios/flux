import { ActionTree, GetterTree } from 'vuex'
import { RootState } from '..'
import { CounterMutations } from './mutations'
import { CounterState } from './state'

export const CounterActions = {
    loadCount: '[counter] loading count from api request'
}

export const actions: ActionTree<CounterState, RootState> = {
    [CounterActions.loadCount]: ({ commit }) => {
        const mockApiResponse = Math.round(Math.random() * 100);
        commit(CounterMutations.setCount, mockApiResponse);
    }
}