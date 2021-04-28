import axios from 'axios';
 
//cloud
 //const API = axios.create({ baseURL: 'https://kamonrarara.herokuapp.com' });

//local
const API = axios.create({ baseURL: 'http://localhost:5555' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);

export const fetchUsers = () => API.get('/users');
export const updateUser = (id, updatedUser) => API.patch(`/users/profile/${id}`, updatedUser);

export const fetchConversation = (userId) => API.get(`/chat/conversations/${userId}`);

export const createConversation = (newConversation) => API.post('/chat/conversations', newConversation);
export const createConversationAndMessage = (newConversationAndMessage) => API.post('/chat/conversations', newConversationAndMessage);

export const fetchMessages = (conversationId) => API.get(`/chat/messages/${conversationId}`);
export const createMessage = (newMessage) => API.post('/chat/messages', newMessage);


