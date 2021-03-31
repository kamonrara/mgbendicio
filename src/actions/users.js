import { FETCH_USERS, UPDATE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getUsers = () => async (dispatch) => {
    try {
      const { data } = await api.fetchUsers();

      dispatch({ type: FETCH_USERS, payload: data });
    } catch(error) {
        console.log(error);
    }
};

export const updateUser = (id, user) => async (dispatch) => {
    try {
       const { data } = await api.updateUser(id, user);
       dispatch({ type: UPDATE, payload: data});
     
    }
    catch (error) {
        console.log(error);
    }
};