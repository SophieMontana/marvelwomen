var api = require('marvel-api')
var colors = require ('colors')

var marvel = api.createClient({
  publicKey: '3d82e91fbd3d89a2a32319235b3aa3b2',
  privateKey: 'aa9a71353466ac3df782c0cfd95e2a9454517ce1'
});


this.marvel.characters.findAll()
  .then(function(res) {
    for (var index = 0; index < res.data.length; index++) {
     console.log((index + 1) + '' + (res.data)[index].name)  
  }
   
  })
  .fail(console.error)
  .done();


