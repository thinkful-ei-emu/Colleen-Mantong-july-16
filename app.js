/* eslint-disable no-console */
const express = require ('express');
const morgan = require ('morgan');

const app = express();
const playstore = require('./playstore.js');
app.use(morgan('common')); 

app.get('/apps', (req, res) => {
 const { search=''} = req.query;
  
/*   if(sort){
    if(!['rating', 'app'].includes(sort)){
      return res.status(400).send('Sort must be one of rating or app');
    }
  } */
//   const genresOption = ['action', 'puzzle', 'strategy', 'casual', 'arcade', 'card'];
//   if (!genresOption.find(genres.toLowerCase())){
//     return res.status(400).send('Search must match Genres');
//   }

  let results = playstore 
    .filter(game =>
      game
        //.App
        .Genres
        .toLowerCase()
        .includes(search.toLowerCase()))
 /*  if(sort){
    results
      .sort((a,b) => {
        return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
      });
  } */
    res.json(results)
  
  
});

app.listen(8080, ()=>{console.log('Server started on PORT 8080');
});