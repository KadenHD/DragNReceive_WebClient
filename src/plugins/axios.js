import axios from 'axios';

const apiPORT = 3000;
const apiURL = 'http://localhost:' + apiPORT + '/api/';

axios.defaults.baseURL = apiURL;
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');