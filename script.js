function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains('light')){
    //se tiver light mode, adc a img light
    img.setAttribute('src', './assets/assets/ps-avatar.png')
    img.setAttribute('alt', 'Álison de terno cor vinho e óculos de grau sentado em um sofá e olhando para frente em um fundo com luz amarela.')
  } else {
    //senão tiver, manter a img q já tá
    img.setAttribute('src', './assets/assets/pm-avatar.png')
    img.setAttribute("alt", "Álison de terno cor vinho e óculos de grau olhando para frente com uma escada de fundo.")
  }
}
