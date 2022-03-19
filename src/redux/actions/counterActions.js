import * as actionTypes from "./actionTypes";

// action for increment
export const counterIncrease = () => {
    // return a JS object
    return {
        type:actionTypes.COUNTER_INCREASE,
        payload: 1
    }
}

// action for decrement
export const counterDecrease = () => {
    // return a JS object
    return {
        type:actionTypes.COUNTER_DECREASE,
        payload: 1
    }
}

// action for reset
export const counterReset = () => {
    // return a JS object
    return {
        type:actionTypes.COUNTER_RESET,
        payload: 0
    }
}