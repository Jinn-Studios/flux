import { ActionTree, GetterTree } from 'vuex'
import { RootState } from '..'
import { CountMuations } from './mutations'
import { CountState } from './state'

export const CountActions = {
    loadCount: '[count] loading count from api request'
}

export const actions: ActionTree<CountState, RootState> = {
    // async & imperative component logic relating to state can go here
    [CountActions.loadCount]: ({ commit }) => {
        const mockApiResponse = Math.round(Math.random() * 100);
        commit(CountMuations.setCount, mockApiResponse);
    }
}