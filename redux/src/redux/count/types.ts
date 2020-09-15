import { Action } from "redux";

export enum COUNTER_ACTIONS {
    INCREMENT = 'counter/increment',
    DECREMENT = 'counter/decrement',
    RESET = 'counter/reset'
}

export interface CounterState {
    count: number;
}

export const initialCounterState: CounterState = {
    count: 0
}

export interface IncrementCounterAction extends Action {
    type: typeof COUNTER_ACTIONS.INCREMENT;
}

export interface DecrementCounterAction extends Action {
    type: typeof COUNTER_ACTIONS.DECREMENT;
}

export interface ResetCounterAction extends Action {
    type: typeof COUNTER_ACTIONS.RESET;
}

export type CounterActions = IncrementCounterAction
    | DecrementCounterAction
    | ResetCounterAction;