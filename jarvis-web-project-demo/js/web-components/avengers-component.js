var createCard = require('./card-component.js')

var getHero = require('./get-hero.js')

var getAvengers = function(options) {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
  if(this.readyState == 4) {
        if(options.all == true){
       createCard(JSON.parse(this.responseText))
        }

    else if(options.all == false){
      getHero(options)
    }
   }
 }
  req.open('Get', 'http://ssimmons.tgb2.ninja:4900')
  req.send()
}

module.exports = getAvengers
