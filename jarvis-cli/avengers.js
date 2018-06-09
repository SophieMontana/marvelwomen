var api = require('marvel-api')
var Profile = require('./avengerProfile')


class Avengers {
  constructor(config) {
    this.marvel = api.createClient({
      publicKey : config.publicKey,
      privateKey : config.privateKey
    });
}

   assemble(cb) {
    Promise.all([ this.marvel.characters.findByName('Thundra'),this.marvel.characters.findByName('Storm'), this.marvel.characters.findByName('Selene'),
      this.marvel.characters.findByName('Thena'), this.marvel.characters.findByName('Mary Jane Watson')])
      .then(function (responses) {
      let avengers = []
      responses.forEach(function(character) {
        let profile = new Profile ({name:character.data[0].name,description: character.data[0].description})
        avengers.push(profile.createProfile())
      })
       console.log('Avengers Assemble!!!')
       console.log(avengers)
       cb(JSON.stringify(avengers))
      })
  }
}

module.exports = Avengers
    
