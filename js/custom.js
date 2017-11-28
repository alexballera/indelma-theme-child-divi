'use strict'

function main () {
  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    var pathname = window.location.pathname
    var dir = ''
    var pathnameHome = '/'
    var pathnameSomos = '/quienes-somos/'
    var pathnameTrabaja = '/trabaja-con-nosotros/'
    var homeBanner = document.getElementById('home-banner')

    if (pathname === dir + pathnameHome || pathname === dir + pathnameSomos) {
      var homeBannerTexto = homeBanner.childNodes[1]
      var homeBannerTexto2 = homeBanner.childNodes[4]
      var homeBotonClose = homeBannerTexto2.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[0]
      var homeBannerTexto3 = homeBanner.childNodes[7]
      var homeBoton = homeBannerTexto3.childNodes[1].childNodes[4].childNodes[1]
      initHome()
    }

    if (pathname === dir + pathnameSomos) {
      var somosBotonClose = homeBannerTexto2.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[0]
      var somosBotonNextText4 = homeBannerTexto2.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[9]

      var somosBannerText4 = homeBanner.childNodes[10]
      var somosBotonCloseText4 = somosBannerText4.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[0]
      var somosBotonNextText5 = somosBannerText4.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[9]

      var somosBannerText5 = homeBanner.childNodes[13]
      var somosBotonCloseText5 = somosBannerText5.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[0]
      initSomos()
    }

    if (pathname === dir + pathnameTrabaja) {
      var trabajaClima = document.getElementById('trabaja-clima')
      var trabajaClimaBotonNext = trabajaClima.childNodes[1].childNodes[1].childNodes[1].childNodes[3]
      var trabajaClima2 = document.getElementById('trabaja-clima-2')
      var trabajaClima2BotonNext = document.getElementById('trabajaClima2BotonNext')
      
      var trabajaFilosofia = document.getElementById('trabaja-filosofia')
      var trabajaFilosofiaBotonNext = trabajaFilosofia.childNodes[1].childNodes[1].childNodes[1].childNodes[3]
      var trabajaFilosofia2 = document.getElementById('trabaja-filosofia-2')
      var trabajaFilosofia2BotonNext = document.getElementById('trabajaFilosofia2BotonNext')

      var valor1Image = document.getElementById('valor1-images')
      var valor1ImageHover = document.getElementById('valor1-images-hover')
      var valorResponsabilidad = document.getElementById('valor-responsabilidad')

      var valor2Image = document.getElementById('valor2-images')
      var valor2ImageHover = document.getElementById('valor2-images-hover')
      var valorEtica = document.getElementById('valor-etica')

      var valor3Image = document.getElementById('valor3-images')
      var valor3ImageHover = document.getElementById('valor3-images-hover')
      var valorIgualdad = document.getElementById('valor-igualdad')

      var valor4Image = document.getElementById('valor4-images')
      var valor4ImageHover = document.getElementById('valor4-images-hover')
      var valorSeguridad = document.getElementById('valor-seguridad')

      var valor5Image = document.getElementById('valor5-images')
      var valor5ImageHover = document.getElementById('valor5-images-hover')
      var valorCapacitacion = document.getElementById('valor-capacitacion')

      var valor6Image = document.getElementById('valor6-images')
      var valor6ImageHover = document.getElementById('valor6-images-hover')
      var valorCalidad = document.getElementById('valor-calidad')

      initTrabaja()
    }

    function initHome () {
      homeBannerTexto2.style.display = 'none'
      homeBannerTexto.style.top = '100px'

      homeBoton.addEventListener('click', showText2)
      homeBotonClose.addEventListener('click', showHome)
    }
    function initSomos () {
      somosBannerText4.style.display = 'none'
      somosBannerText5.style.display = 'none'
      homeBannerTexto.style.top = '150px'

      somosBotonClose.addEventListener('click', showHome)
      somosBotonNextText4.addEventListener('click', showText4)
      somosBotonCloseText4.addEventListener('click', hideText4)
      somosBotonNextText5.addEventListener('click', showText5)
      somosBotonCloseText5.addEventListener('click', hideText5)
    }
    function initTrabaja () {
      // Clima
      trabajaClima2.style.display = 'none'
      trabajaClimaBotonNext.addEventListener('click', showTrabajaClima2)
      trabajaClima2BotonNext.addEventListener('click', hideTrabajaClima2)

      // Filosofia
      trabajaFilosofia2.style.display = 'none'
      trabajaFilosofiaBotonNext.addEventListener('click', showTrabajaFilosofia2)
      trabajaFilosofia2BotonNext.addEventListener('click', hideTrabajaFilosofia2)

      // Valores
      // Valor 1
      valor1Image.style.display = 'none'
      valor1Image.addEventListener('click', showValor1)

      // Valor 2
      valor2Image.style.display = 'none'
      valor2Image.addEventListener('click', showValor2)

      // Valor 3
      valor3Image.style.display = 'none'
      valor3Image.addEventListener('click', showValor3)

      // Valor 4
      valor4Image.style.display = 'none'
      valor4Image.addEventListener('click', showValor4)

      // Valor 5
      valor5Image.style.display = 'none'
      valor5Image.addEventListener('click', showValor5)

      // Valor 6
      valor6Image.style.display = 'none'
      valor6Image.addEventListener('click', showValor6)

      showValorDefault()
    }
    function showHome (e) {
      e.preventDefault()
      homeBannerTexto.style.display = 'block'
      homeBannerTexto3.style.display = 'block'
      homeBannerTexto2.style.display = 'none'
    }
    function showText2 (e) {
      e.preventDefault()
      homeBannerTexto.style.display = 'none'
      homeBannerTexto3.style.display = 'none'
      homeBannerTexto2.style.display = 'block'
      homeBanner.style.padding = '0'
    }
    function showText4 (e) {
      e.preventDefault()
      homeBannerTexto2.style.display = 'none'
      somosBannerText4.style.display = 'block'
    }
    function hideText4 (e) {
      e.preventDefault()
      somosBannerText4.style.display = 'none'
      showHome(e)
    }
    function showText5 (e) {
      e.preventDefault()
      somosBannerText4.style.display = 'none'
      somosBannerText5.style.display = 'block'
    }
    function hideText5 (e) {
      e.preventDefault()
      somosBannerText5.style.display = 'none'
      showHome(e)
    }
    function showTrabajaClima2 (e) {
      e.preventDefault()
      trabajaClima.style.backgroundImage = 'url(http://indelma.com.ve/wp-content/uploads/2017/11/img-nuestroclima-desplegado.jpg)'
      trabajaClima.style.height = '500px'
      trabajaClima.childNodes[1].style.display = 'none'
      trabajaClima2.style.display = 'block'
    }
    function hideTrabajaClima2 (e) {
      e.preventDefault()
      trabajaClima.childNodes[1].style.display = 'block'
      trabajaClima.style.backgroundImage = 'url(http://indelma.com.ve/wp-content/uploads/2017/09/img-nuestroclima-verde.png)'
      trabajaClima2.style.display = 'none'
    }
    function showTrabajaFilosofia2 (e) {
      e.preventDefault()
      trabajaFilosofia.style.backgroundImage = 'url(http://indelma.com.ve/wp-content/uploads/2017/11/img-nuestrafilosofia2.jpg)'
      trabajaFilosofia.style.height = '500px'
      trabajaFilosofia.childNodes[1].style.display = 'none'
      trabajaFilosofia2.style.display = 'block'
    }
    function hideTrabajaFilosofia2 (e) {
      e.preventDefault()
      trabajaFilosofia.childNodes[1].style.display = 'block'
      trabajaFilosofia.style.backgroundImage = 'url(http://indelma.com.ve/wp-content/uploads/2017/09/img-nuestrafilosofia-verde.png)'
      trabajaFilosofia2.style.display = 'none'
    }

    function hideValorDefault () {
      valor1ImageHover.style.display = 'none'
      valor2ImageHover.style.display = 'none'
      valor3ImageHover.style.display = 'none'
      valor4ImageHover.style.display = 'none'
      valor5ImageHover.style.display = 'none'
      valor6ImageHover.style.display = 'none'

      valorResponsabilidad.style.display = 'none'
      valorEtica.style.display = 'none'
      valorIgualdad.style.display = 'none'
      valorSeguridad.style.display = 'none'
      valorCapacitacion.style.display = 'none'
      valorCalidad.style.display = 'none'
    }
    function showValorDefault () {
      hideValorDefault()
      showValorImages()
      valor1Image.style.display = 'none'
      valor1ImageHover.style.display = 'block'
      valorResponsabilidad.style.display = 'block'
    }
    function showValorImages () {
      valor1Image.style.display = 'block'
      valor2Image.style.display = 'block'
      valor3Image.style.display = 'block'
      valor4Image.style.display = 'block'
      valor5Image.style.display = 'block'
      valor6Image.style.display = 'block'
    }
    function showValor1 (e) {
      e.preventDefault()
      showValorDefault()
      valor1Image.style.display = 'none'
    }
    function showValor2 (e) {
      e.preventDefault()
      hideValorDefault()
      showValorImages()
      valor2Image.style.display = 'none'
      valor2ImageHover.style.display = 'block'
      valorEtica.style.display = 'block'
    }
    function showValor3 (e) {
      e.preventDefault()
      hideValorDefault()
      showValorImages()
      valor3Image.style.display = 'none'
      valor3ImageHover.style.display = 'block'
      valorIgualdad.style.display = 'block'
    }
    function showValor4 (e) {
      e.preventDefault()
      hideValorDefault()
      showValorImages()
      valor4Image.style.display = 'none'
      valor4ImageHover.style.display = 'block'
      valorSeguridad.style.display = 'block'
    }
    function showValor5 (e) {
      e.preventDefault()
      hideValorDefault()
      showValorImages()
      valor5Image.style.display = 'none'
      valor5ImageHover.style.display = 'block'
      valorCapacitacion.style.display = 'block'
    }
    function showValor6 (e) {
      e.preventDefault()
      hideValorDefault()
      showValorImages()
      valor6Image.style.display = 'none'
      valor6ImageHover.style.display = 'block'
      valorCalidad.style.display = 'block'
    }
  }
}
main()
