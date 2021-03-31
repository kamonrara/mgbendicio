import { FETCH_POSTS, CREATE, UPDATE, DELETE, LIKE, FETCH } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const getPost = (id) => async (dispatch) => {
  try {
   // console.log('client>src>action>posts>getPost with param id:  ', id);
    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH, payload: data});
  }
  catch (error) {
    console.log('client>src>action>posts>getPost ERROR: ', error);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    
    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (error) {
    console.log('client>src>action>posts>getPosts: ', error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    //console.log('action/action/createPost payload data: ', data);
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
