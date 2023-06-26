import { API_URL } from '../config';

export const login = async (user) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return await response.json();
};

export const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'GET',
  });
  return response.json();
};

// Create a post
export const createPost = async (post) => {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return await response.json();
};

// Get a single post
export const getSinglePost = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'GET',
  });
  return await response.json();
};

// Update a post
export const updatePost = async (id, post) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return await response.json();
};

// Delete a post
export const deletePost = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};
