const axios = require('axios')


    const API_KEY = '5bac02e2d11c472ba27c7c91f1e3cf0b';
 export default axios.create({
        baseURL: 'https://listen-api.listennotes.com/api/v2',
        headers: {
            'X-ListenAPI-Key' : API_KEY
        }
     })
