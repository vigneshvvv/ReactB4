import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const customerSlice = createSlice({
    name: 'customer',
    initialState: initialState,
    reducers:{
        addCustomer(state, action){
            state.push(action.payload)
        },

        updateCustomer(state, action){
            return state.map((statenew) => statenew.name === action.payload.name ? action.payload : statenew)
        }, 
        removeCustomer(state, action)  {
            return state.filter(statefl => statefl.name !== action.payload.name)
        }
    }
})

export const {addCustomer, updateCustomer, removeCustomer} = customerSlice.actions;
export default customerSlice.reducer;