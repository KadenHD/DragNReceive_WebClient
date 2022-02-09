import axios from 'axios';

const apiPORT = 3000;
const apiURL = 'http://localhost:' + apiPORT + '/api/'; // par la suite mettre l'adresse de l'api car les requêtes partent du pc du user

axios.defaults.baseURL = apiURL;
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');