//we need a button to click
//we need a function to go and hit my jarvis-api -using XMLHttpRequest

var getAvengers = function() {
  var req = new XMLHttpRequest()
    req.onreadystatechange = function(){
      if(this.readyState == 4) {
        console.log(JSON.parse(this.responseText))
    }
  }
  req.open('Get','http://ssimmons.tgb2.ninja:4400')
  req.send()
}
//HTTP Verbs GET = Read Data, POST = Give You Some Data (Write Data), PUT = Update Data, DELETE = Deletes Data

var content = document.getElementById('content')
var button = document.createElement('button')
button.onclick = getAvengers

button.innerHTML = 'Women of Marvel'

//Add a w3 CSS card with Image
var card = document.createElement('div')
var img = document.createElement('img')
img.src = '/assets/*.img'


var h1 = document.createElement('h2')
h1.innerHTML = 'Women of Marvel'
content.append(h1)
content.append(button)
