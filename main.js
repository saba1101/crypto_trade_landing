const initPage = () => {
    $('#page_header').load("/components/layout/Header.html")
    $('#section_home').load("/modules/home/Home.html")
    $('#how_it_works').load("/modules/guide/guide.html")
}

$(document).ready(() => {
    initPage()
    $('#loader').hide()
})