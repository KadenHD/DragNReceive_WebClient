import axios from 'axios';

const apiPORT = 3000;
// par la suite mettre l'adresse de l'api car les requêtes par du pc du user
const apiURL = 'http://localhost:' + apiPORT + '/api/';

axios.defaults.baseURL = apiURL;
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');