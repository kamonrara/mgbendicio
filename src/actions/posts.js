import { FETCH_POSTS, CREATE, UPDATE, DELETE, LIKE, FETCH, FETCH_BY_SEARCH, START_LOADING, END_LOADING } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH, payload: data});
    dispatch({ type: END_LOADING });
  }
  catch (error) {
    console.log('client>src>action>posts>getPost ERROR: ', error);
  }
};

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page);
    
    dispatch({ type: FETCH_POSTS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log('client>src>action>posts>getPosts: ', error);
  }
};

export const getPostsBySearch = (searchquery) => async (dispatch) => {

  try {
    dispatch({ type: START_LOADING });
    //destructure 2 times
    const { data: { data } } = await api.fetchPostsBySearch(searchquery);

        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING });


  } catch(error) {

    console.log('getPostsBySearch error: ', error)
  }
}
//accept the history object that came from the front end
export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);
    history.push(`/posts/${data._id}`)
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {

    const { data } = await api.updatePost(id, post);
    
    //console.log('action/action/updatePost payload data: ', data);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
