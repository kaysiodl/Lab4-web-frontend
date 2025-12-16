import { configureStore } from "@reduxjs/toolkit";
import rReducer from "./rSlice";

export const store = configureStore({
    reducer: {
        r: rReducer
    }
});
