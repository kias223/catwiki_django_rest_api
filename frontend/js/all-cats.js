const baseApi = 'http://127.0.0.1:8000/'

async function renderPage() {
    const response = await fetch(baseApi + 'cat-info', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => console.log(error))

    const dataResponse = await response.json()

    var catPhotosContainer = document.querySelector('.cat-photos-container')
    for (let info of dataResponse) {
        catPhotosContainer.innerHTML += `
        <a href="../pages/cat-info.html" id="${info.id}" class="cat-card">
                <img src="${baseApi + info.top_cat_img}">
                <p>${info.name}</p>
        </a>
        `
    }

    var catCard = document.querySelectorAll('.cat-card')
    catCard.forEach((element) => {
        element.addEventListener('click', () => {
            localStorage.setItem('card-render-id', element.id)
        })
    })

}

renderPage()