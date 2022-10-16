const axios = require('axios');
const api_key = '5bac02e2d11c472ba27c7c91f1e3cf0b'
const express = require('express')
const app = express()

axios.get({
  baseURL: 'https://listen-api.listennotes.com/api/v2',
  params: {
    key : api_key, 
  }
})