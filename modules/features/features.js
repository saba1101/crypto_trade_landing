const features = [
    {
        title: 'Weekly Trading Contest',
        imgSrc: '1',
        description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
    },
    {
        title: 'Less Commission On Trade',
        imgSrc: '2',
        description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
    },
    {
        title: 'Safe And Secure Trading platform',
        imgSrc: '3',
        description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
    },
    {
        title: 'Instant Withdraw Process',
        imgSrc: '4',
        description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
    },
    {
        title: 'Monthly Commition',
        imgSrc: '5',
        description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
    },
    {
        title: '24/7 Support Team',
        imgSrc: '6',
        description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
    },

]

$(document).ready(() => {
    let list_placeholder = $('#features-list')
    features.forEach(el => {
        list_placeholder.append(
            `
                <li>
                    <div class="label">
                        <div class="icon-placeholder">
                            <img src="/assets/images/featureIcons/${el.imgSrc}.svg"/>
                        </div>
                        <div>
                            <span> ${el.title} </span>
                        </div>
                    </div>
                    <div class="description-label">
                        <span> ${el.description} </span>
                    </div>
                </li>
            `
        )
    })
})