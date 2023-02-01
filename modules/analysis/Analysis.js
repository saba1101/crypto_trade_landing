const analysis = [
    {
        title: 'How to trade Bitcoin',
        description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
        imgSrc: 1,
    },
    {
        title: 'Gain the best exchange',
        description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
        imgSrc: 2,
    },
    {
        title: 'Reduce your loosing',
        description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
        imgSrc: 3,
    },
    {
        title: 'Win 50-50 trading strategy',
        description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
        imgSrc: 4,
    },
]

$(document).ready(() => {
    analysis.forEach(el => {
        $('#analysis_list').append(
            `
                <li>
                    <div class="image-placeholder" style="background-image: url('/assets/images/analysis/${el.imgSrc}.png')">

                    </div>
                    <div class="details">
                        <span class="title"> ${el.title} </span>
                        <span class="description-analysis"> ${el.description} </span>
                        <span class="learn-more"> Learn More </span>
                    </div>
                </li>
            `
        )
    })
})