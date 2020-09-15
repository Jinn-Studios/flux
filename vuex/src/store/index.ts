import Vue from "vue";
import Vuex from "vuex";
import { count } from './count';

Vue.use(Vuex);

export interface RootState {
  [key: string]: any;
}

export default new Vuex.Store({
  state: {},
  modules: {
    count
  },
});
