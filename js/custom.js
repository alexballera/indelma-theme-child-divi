'use strict'

function main () {
  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    var homeBanner = document.getElementById('home-banner')
    var homeBannerTexto = homeBanner.childNodes[1]
    var homeBannerTexto2 = homeBanner.childNodes[4]
    var homeBannerTexto3 = homeBanner.childNodes[7]
    var homeBoton = homeBanner.childNodes[7].childNodes[1].childNodes[4].childNodes[1]
    var homeBotonClose = homeBanner.childNodes[4].childNodes[1].childNodes[1].childNodes[1].childNodes[0]

    var hoverHome = () => {
      homeBoton.addEventListener('click', showTexto2)
      homeBotonClose.addEventListener('click', hideTexto2)
      homeBannerTexto2.style.display = 'none'
    }
    hoverHome()

    function showTexto2 (e) {
      e.preventDefault()
      homeBannerTexto.style.display = 'none'
      homeBannerTexto3.style.display = 'none'
      homeBannerTexto2.style.display = 'block'
    }

    function hideTexto2 (e) {
      e.preventDefault()
      homeBannerTexto.style.display = 'block'
      homeBannerTexto3.style.display = 'block'
      homeBannerTexto2.style.display = 'none'
    }
  }
}
main()
