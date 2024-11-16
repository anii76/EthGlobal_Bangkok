import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createKintoSDK, KintoAccountInfo, TxCall } from "kinto-web-sdk";
import { message } from "antd";

export const connectKinto = createAsyncThunk(
    "connectKinto",
    async () => {
        try {
            const kintoSDK = createKintoSDK(import.meta.env.VITE_KINTO_APP_SMART_CONTRACT_ADDRESS);
            const info = await kintoSDK.connect();
            console.log('KintoAccountInfo:', info);
            return info;
        } catch (error: any) {
            console.error('Kinto - Failed to connect:', error);
            throw new Error(`Kinto - Failed to connect: ${error.message}`)
        }
    },
)

export const createNewWalletKinto = createAsyncThunk(
    "createNewWalletKinto",
    async () => {
        try {
            const kintoSDK = createKintoSDK(import.meta.env.VITE_KINTO_APP_SMART_CONTRACT_ADDRESS);
            await kintoSDK.createNewWallet();
        } catch (error: any) {
            console.error('Kinto - Failed createNewWallet:', error);
            throw new Error(`Kinto - Failed createNewWallet: ${error.message}`)
        }
    },
)

interface KintoReducerState {
    account: KintoAccountInfo | null,
}

function getInitState(): KintoReducerState {
    return {
        account: null,
    }
}

export const kinto = createSlice({
    name: "kinto",
    initialState: getInitState(),
    reducers: {
        setAccessToken: (state, action) => {
            localStorage.setItem("accessToken", action.payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(connectKinto.fulfilled, (state, action) => {
                state.account = action.payload;
            })
            .addCase(connectKinto.rejected, (state, action) => {
                message.error(action.error.message);
            })
    },
})

export const { setAccessToken } = kinto.actions;
export default kinto.reducer
