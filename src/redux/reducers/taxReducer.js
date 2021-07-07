import { types } from "../types/types";


const initialState = {
    items: [],
    active: null
}

export const taxReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addTaxItem:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case types.deleteTaxItem:
            return {
                ...state,
                items: state.items.filter( i => i._id !== action.payload )
            };
        case types.updateTaxItem:
            return {
                ...state,
                items: state.items.map(i => {
                    if(i._id === action.payload._id) {
                        return {
                            ...action.payload
                        }
                    } else {
                        return i
                    }
                })
            };
        case types.setActiveTaxItem:
            return {
                ...state,
                active: action.payload
            };
        case types.clearActiveTaxItem:
            return {
                ...state,
                active: null
            }
        default:
            return state;
    }
}