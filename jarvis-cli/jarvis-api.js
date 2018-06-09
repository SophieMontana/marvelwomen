let express = require('express')
let app = express()
let Marvel = require('./avengers')


app.get('/', function(request,response){
    var avengers = new Marvel({
    publicKey : '3d82e91fbd3d89a2a32319235b3aa3b2',
    privateKey : 'aa9a71353466ac3df782c0cfd95e2a9454517ce1'
    })
    avengers.assemble(function(avengers){
      response.send(JSON.parse(avengers))
    })
})
  
app.listen('4400', function() {
    console.log('running on port 4400')
})

