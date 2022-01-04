// it wise to start with actions
import * as api from '../api/index';

// this functin name like api's name,
// first param is post and then netsted async (dispatch) .
// inner function, first destructe the api's data,
// and then setting up dispatch to execute once our createPost function is called elsewhere

export const createPost = (post) => async (dispatch) => {
    const { data } = await api.createPost(post);
    dispatch({ type: 'POST', payload: data});
}


export const getPosts = () => async (dispatch) => {
    const { data } = await api.getPosts();
    dispatch({ type: 'GET', payload: data});
}


export const updatePost = (id, post) => async (dispatch) => {
    const {data} = await api.updatePost(id, post);
    dispatch({type: 'UPDATE', payload: post});
}


export const deletePost = (id) => async (dispatch) => {
    const {data} = await api.deletePost(id);
    dispatch({ type: 'DELETE', payload: id});
}