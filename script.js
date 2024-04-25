function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains('light')){
    //se tiver light mode, adc a img light
    img.setAttribute('src', './assets/assets/s-avatar.png')
    img.setAttribute('alt', 'Luffy Gear 5 meio de lado olhando fixo para frente enquanto sorri.')
  } else {
    //senão tiver, manter a img q já tá
    img.setAttribute('src', './assets/assets/m-avatar.png')
    img.setAttribute("alt", "Luffy com um olhar fixo para frente e sorrindo.")
  }

}
