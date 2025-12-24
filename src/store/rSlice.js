import { createSlice } from "@reduxjs/toolkit";

const savedR = localStorage.getItem("r");

const initialState = {
    value: savedR ? Number(savedR) : 1
};

const rSlice = createSlice({
    name: "r",
    initialState,
    reducers: {
        setR(state, action) {
            state.value = action.payload;
            localStorage.setItem("r", action.payload);
        }
    }
});

export const { setR } = rSlice.actions;
export default rSlice.reducer;
