var fetch = require('whatwg-fetch');
var url = 'http://api.github.com/users/zacck';

fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(jsonRes){
      console.log('The response', jsonRes);
    })
    .catch(function(err) {
      console.log(err);
    });
