import { configureStore } from "@reduxjs/toolkit";
import { login } from "./authSlice";
const store = configureStore({
    reducer : {
        login
    }
});


export default store;
