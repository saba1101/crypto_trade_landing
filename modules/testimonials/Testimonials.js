const testimonials = [
    {
        author: 'Cameron Williamson',
        avatar: 1,
        position: 'FX Trader',
        description: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
    },
    {
        author: 'Bessie Cooper',
        avatar: 2,
        position: 'Stock Manager',
        description: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
    },
    {
        author: 'Albert Flores',
        avatar: 3,
        position: 'Crypto Analyst',
        description: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
    },
]

$(document).ready(() => {
    testimonials.forEach(el => {
        
        $('#testimonials-list').append(
            `
                <li>
                    <img src="/assets/images/testimonials/quote.svg" />
                    <p> ${el.description} </p>
                    <div class="avatar"> <img src="/assets/images/testimonials/${el.avatar}.png" /> </div>
                    <span class="author"> ${el.author} </span>
                    <span class="position"> ${el.position} </span>
                </li>
            `
        )
    })
})