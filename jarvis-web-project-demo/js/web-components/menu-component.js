var Menu = function() {
  var content = document.getElementById('content')
  //Navagation Menu
  let nav = document.createElement('div')
  nav.className = 'w3-bar w3-pink'
  //Home Navagation Item
  let home = document.createElement('a')
  home.className = 'w3-bar-item w3-button'
  home.href = '#'
  home.innerHTML = 'Home'
  nav.append(home)
  //Avengers Navigation Item
  let av_nav = document.createElement('a')
  av_nav.className = 'w3-bar-item w3-button'
  av_nav.href = '#/avengers'
  av_nav.innerHTML = 'Avengers'
  nav.append(av_nav)
  content.append(nav)
 //Thundra
  th_nav = document.createElement('a')
  th_nav.className = 'w3-bar-item w3 button'
  th_nav.href = '#/thundra'
  th_nav.innerHTML = 'Thundra'
  nav.append(th_nav)
  content.append(nav)
  //Storm
  let st_nav = document.createElement('a')
  st_nav.className = 'w3-bar-item w3 button'
  st_nav.href = '#/storm'
  st_nav.innerHTML = 'Storm'
  nav.append(st_nav)
  content.append(nav)
 //Selene
  let se_nav = document.createElement('a')
  se_nav.className = 'w3-bar-item w3 button'
  se_nav.href = '#/selene'
  se_nav.innerHTML = 'Selene'
  nav.append(se_nav)
  content.append(nav)
 //Thena
  let ta_nav = document.createElement('a')
  ta_nav.className = 'w3-bar-item w3 button'
  ta_nav.href = '#/thena'
  ta_nav.innerHTML = 'Thena'
  nav.append(ta_nav)
  content.append(nav)
  //MJW
  let mj_nav = document.createElement('a')
  mj_nav.className = 'w2-bar-item w3 button'
  mj_nav.href = '#/mjw'
  mj_nav.innerHTML = 'Mary Jane'
  nav.append(mj_nav)
  content.append(nav)

}

module.exports = Menu
