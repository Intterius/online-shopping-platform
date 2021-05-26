import axios from 'axios';
const key = localStorage.getItem('key');

const interceptorRequest = axios.create({
  headers: {
    Authorization: key,
  },
});

export { interceptorRequest };
