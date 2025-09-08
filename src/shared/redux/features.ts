import {getCookie, setCookie} from "cookies-next";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {OrdersDto} from "@/shared/model/dto/orders/orders.dto";

const initialState = {
    loading: false,
    user: getCookie('user') ? JSON.parse(<string>getCookie('user')) : null,
    token: getCookie('token') ? getCookie('token') : null,
};

const counter = createSlice({
    name: 'storeManager',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<OrdersDto>) => {
            state.user=action.payload
            setCookie("user", action.payload, {maxAge: 3600 * 3600 * 24});
            setCookie("token", action.payload.token, {maxAge: 3600 * 3600 * 24});
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        logout:(state) => {
            state.user=null;
            state.token=null;
            setCookie('user', null)
            setCookie('authorization', null)
        }
    },
});

export const {
    setUser,
    logout
} = counter.actions;

export default counter.reducer;
