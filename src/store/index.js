import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginApi } from "./apis/loginApi";
import { authReducers } from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducers,
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(loginApi.middleware)
    }
})

setupListeners(store.dispatch);

export { useSignupMutation, useLoginMutation } from "./apis/loginApi"
export {
    setToken,
    clearToken,
    setUserId,
    clearUserId
} from "./slices/authSlice"