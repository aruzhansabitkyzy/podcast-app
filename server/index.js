import pkg from '../client/src/components/instance.js';
const {instance} = pkg;
const {Client}  = require('podcast-api')

// app.get('/', async function(req, res) {
//    let query = req.body;
//    if(query.endpoint != null) {
//       let end = query.endpoint;
//       switch(end) {
//          case 'search' : 
//           instance.get('/search', {q: query.q})
//           .then(function(res) {
//             var podcasts = res.data
//             console.log(podcasts)
//             res.send({podcasts})
//           })
//           .catch(error => {
//             console.log(error)
//             res.send({error: error})
//           })
//       }
//    }
// })

instance.get('/search', function(req, res) {
   
})
console.log("done")