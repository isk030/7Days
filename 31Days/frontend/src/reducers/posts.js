import {ADD_POST, DELETE_POST, DISLIKE_POST, GET_POSTS, LIKE_POST} from '../actions/types.js';

const initialState = {
    posts: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case LIKE_POST:
            let arr2 = [action.payload]
            return {
                ...state,
                posts: [...state.posts.map(obj => arr2.find(o => o.id === obj.id) || obj)]
            };
        case DISLIKE_POST:
            let arr3 = [action.payload]
            return {
                ...state,
                posts: [...state.posts.map(obj => arr3.find(o => o.id === obj.id) || obj)]
            };
        default:
            return state
    }


}