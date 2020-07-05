import React from 'react';

// Actions type
const INCREMENTAR = '[CONTADOR] INCREMENTAR'
const DECREMENTAR = '[CONTADOR] DECREMENTAR'
const MULTIPLICAR = '[CONTADOR] MULTIPLICAR'
const DIVIDIR = '[CONTADOR] DIVIDIR'
const RESET = '[CONTADOR] RESET'

// Actions creators
export const incrementar = () => ({
    type: INCREMENTAR
})

export const decrementar = () => ({
    type: DECREMENTAR
})

export const multiplicar = () => ({
    type: MULTIPLICAR
})

export const dividir = () => ({
    type: DIVIDIR
})

export const reset = () => ({
    type: RESET
})

const initialState = 0

// Reducer
export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENTAR:
            return state + 1
        case DECREMENTAR:
            return state - 1
        case MULTIPLICAR:
            return state * 2
        case DIVIDIR:
            return state / 2
        case RESET:
            return 0
        default:
            return state
    }
}

// Selector
export function getFactorial(count) {
    if (count >= 1) {
        let array = [...Array(count)].map((val, idx) => idx + 1);

        const reducer = (acc, currentValue) => acc * currentValue;
        const res = array.reduce(reducer, 1);

        return <span>{count}! = {res}</span>
    }
    
    return <span className="error">El contador es menor a 1</span>
}