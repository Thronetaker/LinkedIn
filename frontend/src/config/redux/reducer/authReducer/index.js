import { loginUser, registerUser } from "../../action/authAction/index.js";

const { createSlice } = require("@reduxjs/toolkit");
const { connect } = require("react-redux");

const initialState = {
    user:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    loggedIn: false,
    message: '',
    profilefetched: false,
    connections: [],
    connectionRequest: [],


};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => initialState,
        handleLoginUser : (state) => {
            state.message = "Login Successful";
        }
    },

    extraReducers: (builder) => {
        // Add Async Thunks Here
        builder
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.message = "Knocking the door "
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.loggedIn = true;
            state.message = "Login Successful";
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.loggedIn = false;
            state.message = action.payload;
            // .message || "Login Failed";
        })    
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.message = "Registering User ";
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;  
            state.isError = false;      
            state.isSuccess = true;
            state.loggedIn = true;
            state.message = "Registration Successful";
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            // .message || "Registration Failed";
        })  
    }
})

export default authSlice.reducer;