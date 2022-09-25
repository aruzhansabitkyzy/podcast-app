const {Client} = require('podcast-api')
const api_key = '5bac02e2d11c472ba27c7c91f1e3cf0b'

const client = Client({ apiKey: process.env.api_key || null});
client.search({
    q: 'star wars',
  }).then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.log(error)
  });

client.typeahead({
  q: 'start',
  show_podcasts: 4,
  show_genres: 1,
  safe_mode: 0
}).then((response) => {
  console.log(response.data)
}).catch((error) => {
  console.log(error)
})