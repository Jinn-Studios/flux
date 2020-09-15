import { COUNTER_ACTIONS, initialCounterState, CounterState, CounterActions } from './types';

export const countReducer = (state: CounterState = initialCounterState, { type }: CounterActions): CounterState => {
    switch(type) {
        case COUNTER_ACTIONS.RESET: {
            return { ...initialCounterState };
        }
        case COUNTER_ACTIONS.INCREMENT: {
            const count = state.count + 1;
            return { ...state, count };
        }
        case COUNTER_ACTIONS.DECREMENT: {
            const count = state.count - 1;
            return { ...state, count };
        }
        default: {
            return { ...state };
        }
    }
}