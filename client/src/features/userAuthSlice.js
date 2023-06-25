import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    isLoggedIn: null,
    isLoggedError: null,
    isLoggedLoading: false,
    isRegistred: null,
    isRegisteredError: null,
    isRegistredLoading: false
}

export const userRegistrationAuth = createAsyncThunk(
    "userAuth/userAuthRegistration",
    async (userInfo, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3500/register', JSON.stringify(userInfo), {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const userLoginAuth = createAsyncThunk(
    "userAuth/userAuthLogin",
    async (userInfo, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3500/login', JSON.stringify(userInfo), {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(userRegistrationAuth.pending, (state) => {
                state.isRegistredLoading = true
                state.isRegisteredError = null
            })
            .addCase(userRegistrationAuth.fulfilled, (state) => {
                state.isRegistredLoading = false
                state.isRegisteredError = false
                state.isRegistred = true
            })
            .addCase(userRegistrationAuth.rejected, (state) => {
                state.isRegistredLoading = false
                state.isRegisteredError = true
                state.isRegistred = false
            })

            
            .addCase(userLoginAuth.pending, (state) => {
                state.isRegistredLoading = true
                state.isRegisteredError = null
            })
            .addCase(userLoginAuth.fulfilled, (state) => {
                state.isRegistredLoading = false
                state.isRegisteredError = false
                state.isRegistred = true
            })
            .addCase(userLoginAuth.rejected, (state) => {
                state.isRegistredLoading = false
                state.isRegisteredError = true
                state.isRegistred = false
            })
    }
})

export default userAuthSlice.reducer