var express = require('express')
var app = express()
var path = require('path')

app.use(express.static('app'))

app.get('/#', function(req,res) {
  res.sendFile(path.join(__dirname,'app/index.html'))

})

app.listen('4900', function() {
  console.log('running on port 4900')

})
