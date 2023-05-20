const baseApi = 'http://127.0.0.1:8000/'

var catPhotosContainer = document.querySelector('.cat-photos-container')
var catNameSugestion = document.querySelector('#cat-name-sugestion')
var catPhotosContainerInfo = []
var catNameSugestionList = []

async function renderPage() {
    const response = await fetch(baseApi + 'cat-info', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => console.log(error))

    const dataResponse = await response.json()

    for (let i = 0; i <= 3; i++) {
        catPhotosContainerInfo.push({
            name: dataResponse[i].name,
            imgUrl: baseApi + dataResponse[i].top_cat_img,
            id: dataResponse[i].id
        })
    }

    for (let info of catPhotosContainerInfo) {
        catPhotosContainer.innerHTML += `
        <a href="pages/cat-info.html?id=${info.id}" class="cat-card">
                <img src="${info.imgUrl}">
                <p>${info.name}</p>
        </a>
        `
    }

    for (let info of dataResponse) {
        catNameSugestionList.push(info.name)
    }

    catNameSugestionList.forEach(element => {
        catNameSugestion.innerHTML += `
        <option>${element}</option>
        `
    })

    var catFormSearch = document.querySelector('#cat-form-search')
    var searchBtn = document.querySelector('#search-btn')

    function search() {
        var searchValue = catFormSearch.querySelector('input')
        localStorage.setItem('searchValue', searchValue.value)
        window.location.href = 'http://127.0.0.1:5500/cat%20wiki/frontend/pages/cat-search.html'
    }

    catFormSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            search()
        }
    })

    searchBtn.addEventListener('click', () => {
        search()
    })


}
renderPage()







