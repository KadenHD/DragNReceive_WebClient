import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_URL + '/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('dragnreceive-web-token');