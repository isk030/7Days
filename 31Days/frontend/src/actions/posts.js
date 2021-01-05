import axios from "axios";
import {ADD_POST, DELETE_POST, DISLIKE_POST, GET_POSTS, LIKE_POST} from "./types";

// get Leads

export const getPosts = () => dispatch => {
    axios.get('/api/posts/')
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}


export const deletePost = (id) => dispatch => {
    axios.delete(`/api/posts/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: id
            });
        }).catch(err => console.log(err));
}

// Add LEAD
export const addPost = (post) => dispatch => {
    axios.post('/api/posts/', post)
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

export const likePost = (post) => dispatch => {
    axios.put(`/api/posts/${post.id}/`, {like_count: post.like_count + 1})
        .then(res => {
            dispatch({
                type: LIKE_POST,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

export const dislikePost = (post) => dispatch => {
    axios.put(`/api/posts/${post.id}/`, {fail_count: post.fail_count + 1})
        .then(res => {
            dispatch({
                type: DISLIKE_POST,
                payload: res.data
            });
        }).catch(err => console.log(err));
}
