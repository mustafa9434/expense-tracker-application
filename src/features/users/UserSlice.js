import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    name: null,
    income: null,
    spent: null,
    remaining: null,
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload
        },
        setUserDetails: (state, action) => {
            state.name = action.payload.name
            state.income = action.payload.income
        }
    },
    extraReducers: {

    }
})


export default userSlice.reducer

export const {setUser} = userSlice.actions 
export const {setUserDetails} = userSlice.actions
export const {setExpenses} = userSlice.actions