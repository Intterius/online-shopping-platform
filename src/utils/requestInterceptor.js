import axios from 'axios';
const key = localStorage.getItem('key');

const cartRequest = axios.create({
  headers: {
    Authorization: key,
  },
});

export { cartRequest };
