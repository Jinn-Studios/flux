import { combineReducers, createStore } from 'redux';
import { countReducer } from './count/reducer';
export const rootReducer = combineReducers({
  count: countReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);