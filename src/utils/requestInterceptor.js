import axios from 'axios';
const key = localStorage.getItem('key');

const cartAxios = axios.create({
  headers: {
    Authorization: key,
  },
});

export { cartAxios };


