import { createAsyncThunk } from "@reduxjs/toolkit";
import {clientServer} from "../../../../config/index.jsx";


export const loginUser= createAsyncThunk(
    "user/login",

    async (user, thunkAPI) => {
        try {
            // const response = await fetch("http://localhost:5000/api/auth/login", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(userData),
            // });

            const response = await clientServer.post("/login", {
                "email" : user.email,
                "password": user.password
            });

            if(response.data.token  ){
                localStorage.setItem("token", response.data.token);
            }else{
                return thunkAPI.rejectWithValue({
                    message : "token not provided"
                });
            }
            
            return thunkAPI.fulfillWithValue(response.data.token);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }   
    }
)

export const registerUser = createAsyncThunk("user/register",
    async (user, thunkAPI) => {
        try {
            const response = await clientServer.post("/register", {
                "name" : user.name,
                "username": user.username,
                "email": user.email,
                "password": user.password
            });
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }           
    }
)