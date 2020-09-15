import { ActionCreator } from "redux";
import { DecrementCounterAction, IncrementCounterAction, ResetCounterAction, COUNTER_ACTIONS } from "./types";

export const increment: ActionCreator<IncrementCounterAction> = () => ({
    type: COUNTER_ACTIONS.INCREMENT,
})

export const decrement: ActionCreator<DecrementCounterAction> = () => ({
    type: COUNTER_ACTIONS.DECREMENT,
})
export const reset: ActionCreator<ResetCounterAction> = () => ({
    type: COUNTER_ACTIONS.RESET,
})

export default {
    increment,
    decrement,
    reset
}