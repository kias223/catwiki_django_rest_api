const baseApi = 'https://ilquias223.pythonanywhere.com/'
const urlParams = new URLSearchParams(window.location.search)
const catInfoId = urlParams.get('id')

const barsRenderContent = (statusNum) => {
    var barsContent = ''
    for (i = 1; i <= statusNum; i++) {
        barsContent += '<span class="active"></span>'
    }

    for (i = 1; i <= 5 - statusNum; i++) {
        barsContent += '<span class="deactive"></span>'
    }

    return barsContent
}

var catImgTop = document.querySelector('.cat-img-top')
var catInfoContainer = document.querySelector('.cat-info-container')


async function renderPage() {
    const response = await fetch(baseApi + 'cat-info-search?id=' + catInfoId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => console.log(error))

    const dataResponse = await response.json()

    catImgTop.innerHTML = `<img src="${baseApi + dataResponse[0].top_cat_img}"/>`

    catInfoContainer.innerHTML = `
        <h1>${dataResponse[0].name}</h1>
        <h4>${dataResponse[0].info}</h4>
        <p><strong>Temperament:</strong> ${dataResponse[0].temperament}</p>
        <p><strong>Origin:</strong> ${dataResponse[0].origin}</p>
        <p><strong>Life Span:</strong> ${dataResponse[0].life_span}</p>

        <div class="cat-status">
            <p>Adaptability:</p>
            <div>   
                ${barsRenderContent(parseInt(dataResponse[0].adaptability))}
            </div>
        </div>

        <div class="cat-status">
            <p>Affection level:</p>
            <div>   
                ${barsRenderContent(parseInt(dataResponse[0].affection_level))}
            </div>
        </div>

        <div class="cat-status">
            <p>Child friendly:</p>
            <div>   
                ${barsRenderContent(parseInt(dataResponse[0].child_frienfly))}
            </div>
        </div>

        <div class="cat-status">
            <p>Grooming:</p>
            <div>   
                ${barsRenderContent(parseInt(dataResponse[0].grooming))}
            </div>
        </div>

        <div class="cat-status">
            <p>Intelligence:</p>
            <div>   
                ${barsRenderContent(parseInt(dataResponse[0].intelligence))}
            </div>
        </div>

        <div class="cat-status">
            <p>Health issues:</p>
            <div>   
                ${barsRenderContent(parseInt(dataResponse[0].health_issues))}
            </div>
        </div>

        <div class="cat-status">
            <p>Social neeeds:</p>
            <div>   
                ${barsRenderContent(parseInt(dataResponse[0].social_needs))}
            </div>
        </div>

        <div class="cat-status">
            <p>Stranger friendly:</p>
            <div>   
                ${barsRenderContent(parseInt(dataResponse[0].stranger_friendly))}
            </div>
        </div>
    `

    var otherPhotosContent = document.querySelector('.other-photos-content')

    otherPhotosContent.innerHTML = `
        <img src="${baseApi + dataResponse[0].cat_img01}" />
        <img src="${baseApi + dataResponse[0].cat_img02}" />
        <img src="${baseApi + dataResponse[0].cat_img03}" />
        <img src="${baseApi + dataResponse[0].cat_img04}" />
    `
}
renderPage()
