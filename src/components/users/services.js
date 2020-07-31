import axios from 'axios';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Accept: 'application/json',
  },
});

function extractDataFromResponse(res) {
  return res.data;
}

function getUsers({ limit = 10, page = 0 } = {}) {
  return client({
    url: '/users',
    params: {
      _limit: limit,
      _page: page,
    },
  }).then(extractDataFromResponse);
}

function getUser(id) {
  return client({
    url: `/users/${id}`,
  }).then(extractDataFromResponse);
}

function deleteUser(id) {
  return client({
    url: `/users/${id}`,
    method: 'DELETE',
  }).then(extractDataFromResponse);
}

export { getUsers, getUser, deleteUser };
