import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '0a961867632479ba111dd7596484600b',
        language: 'es-ES',
    },
});


export default movieDB;
