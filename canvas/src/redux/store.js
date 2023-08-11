import { configureStore } from "@reduxjs/toolkit";
import confCanvaReducer from './confCanvaSlice';

export const store=configureStore({
    reducer: {
        confCanva: confCanvaReducer,
    }
})