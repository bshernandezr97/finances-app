import { types } from "../types/types";

const initialState = {
    items: [],
    active: null
}

export const balanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setBalanceItems:
            return {
                ...state,
                items: action.payload
            }
        case types.addBalanceItem:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case types.deleteBalanceItem:
            return {
                ...state,
                items: state.items.filter(i => i._id !== action.payload)
            }
        case types.updateBalanceItem:
            return {
                ...state,
                items: state.items.map(i => {
                    if(i._id === action.payload._id) {
                        return {
                            ...action.payload
                        }
                    } else {
                        return i;
                    }
                })
            }
        case types.setActiveBalanceItem:
            return {
                ...state,
                active: action.payload
            }
        case types.clearActiveBalanceItem:
            return {
                ...state,
                active: null
            }
        default:
            return state;
    }
}
