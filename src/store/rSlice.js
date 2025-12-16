import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 1
};

export const rSlice = createSlice({
    name: "radius",
    initialState,
    reducers: {
        setR: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setR } = rSlice.actions;
export default rSlice.reducer;
export const store = configureStore({
    reducer: {
        r: rSlice.reducer
    }
});