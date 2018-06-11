var root = 'http://ssimmons.tgb2.ninja:4900/#';
var useHash = true;
var hash = '#';
var router = new Navigo(root, true, '#');
var HomePage = require('./web-pages/home-page.js')
var AvengersPage = require('./web-pages/avengers-page.js')
var ThundraPage = require('./web-pages/thundra-page.js')
var StormPage = require('./web-pages/storm-page.js')
var SelenePage = require('./web-pages/selene-page.js')
var ThenaPage = require('./web-pages/thena-page.js')
var MJWPage = require('./web-pages/mjw-page.js')

router
  .on(function () {
    document.getElementById('content').innerHTML = ''
    HomePage()
  })
  .on({
    'avengers': function() {
    document.getElementById('content').innerHTML = ''
    AvengersPage()
  },

     'thundra': function (){
     document.getElementById('content').innerHTML = '' 
     ThundraPage()
    },
  
     'storm': function (){
     document.getElementById('content').innerHTML = ''
      StormPage()
    },
  
    'selene': function (){
     document.getElementById('content').innerHTML = ''
      SelenePage()
    },
  
   'thena': function () {
    document.getElementById('content').innerHTML = ''
      ThenaPage()
    },
  
   'mjw': function () {
    document.getElementById('content').innerHTML = ''
      MJWPage() 
    }
  })


  .resolve();







 /*var content = document.getElementById('content') 
   content.innerHTML= 'Hello from Avengers' 

 } */



