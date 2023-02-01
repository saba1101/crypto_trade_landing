const initPage = () => {
    $('#page_header').load("/components/layout/Header.html")
    $('#section_home').load("/modules/home/Home.html")
    $('#how_it_works').load("/modules/guide/guide.html")
    $('#available_cryptos').load("/modules/Cryptos/Cryptos.html")
    $('#features').load("/modules/features/Features.html")
    $('#banner').load("/modules/banners/banner.html")
    $('#testimonials').load("/modules/testimonials/Testimonials.html")
    $('#analysis').load("/modules/analysis/Analysis.html")
    $('#footer').load("/components/layout/Footer.html")
    
}

$(document).ready(() => {
    initPage()
    $('#loader').hide()
})