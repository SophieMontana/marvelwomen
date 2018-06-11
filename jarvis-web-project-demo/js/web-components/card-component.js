var createCard = function(arr) {
  for(var x=0; x<arr.length; x++){
        var content = document.getElementById('content')
        var card = document.createElement('div')
        card.style.width = '25%'
        card.className = 'w3-card-4'
        var img = document.createElement('img')
      
        var heroname = document.createElement('p')
        heroname.innerHTML = arr[x].name
        heroname.className = 'w3-container w3-center'
        card.append(heroname)


        var cbutton = document.createElement('button')
        cbutton.innerHTML = 'Get Details'
        cbutton.className = 'w3-button w3-purple'
        if(arr[x].name == 'Thundra') {
        img.src = '/assets/Thundra.jpg'
        }
        else if(arr[x].name == 'Storm') {
        img.src = '/assets/Storm.jpg'     
        }

        else if(arr[x].name == 'Selene') {
        img.src = '/assets/Selene.png'
        }
        else if(arr[x].name == 'Thena') {
          img.src = '/assets/Thena.jpg'
        }

        else if(arr[x].name == 'Mary Jane Watson') {
          img.src = '/assets/MJW.png'
        }
      
  }
        card.append(img)
        var cardContainer = document.createElement('div')
        cardContainer.className = 'w3-container w3-center'
        var note = document.createElement('p')
        note.innerHTML = arr[x].description
        cardContainer.append(note)
        card.append(cardContainer)
        card.append(cbutton)
 

      content.append(card)
    
      
    }
  

  

module.exports = createCard
            
  

