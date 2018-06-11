var Menu = require('../web-components/menu-component.js')
var getAvengers = require('../web-components/avengers-component.js')
var AvengersPage = function() {
    Menu()
    getAvengers()
   }

module.exports = AvengersPage
