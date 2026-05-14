import { createSlice } from "@reduxjs/toolkit";
import { getAllComments, getAllPosts } from "../../action/postAction";


const initialState = {
    posts: [],
    isLoading: false,   
    loggedIn: false,
    postFetched: false,
    isError: false,
    message: '' ,
    comments:[],
    postId:""
}

const postSlice = createSlice({
    name: "postReducer",
    initialState,
    reducers: {
        reset: (state) => initialState,
        resetPostId: (state) => {
            state.postId = "";
        }
    },
    extraReducers: (builder) => {
        // Add Async Thunks Here
        builder
        .addCase(getAllPosts.pending, (state) => {
            state.isLoading = true;
            state.message = "Fetching all the posts ....";
        }   )
        .addCase(getAllPosts.fulfilled, (state, action) => {
            
            state.isLoading = false;
            state.isError = false;
            state.postFetched = true;
            state.posts = action.payload.posts.reverse();
        })
        .addCase(getAllPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload || "Fetching Posts Failed";
        }) 
        .addCase(getAllComments.pending, (state) => {
            state.isLoading = true;
            state.message = "Fetching all the comments ....";
        })
        .addCase(getAllComments.fulfilled, (state, action) => {
            state.postId = action.payload.post_id;
            state.comments = action.payload.comments.comments;
            state.isLoading = false;
            console.log(state.comments);
        })
        .addCase(getAllComments.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload || "Fetching Comments Failed";
        })

    }
});

export const { resetPostId} = postSlice.actions;
export default postSlice.reducer;