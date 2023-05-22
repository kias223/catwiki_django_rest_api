const baseApi = 'http://127.0.0.1:8000/'
const sendBtn = document.querySelector('#send-btn')

var topImg = document.querySelector('#top-img')
var catName = document.querySelector('#cat-name')
var catInfo = document.querySelector('#cat-info')
var catTemperament = document.querySelector('#cat-temperament')
var catOrigin = document.querySelector('#cat-origin')
var catLifeSpan = document.querySelector('#cat-life-span')
var catStatus01 = document.querySelector('#cat-status01')
var catStatus02 = document.querySelector('#cat-status02')
var catStatus03 = document.querySelector('#cat-status03')
var catStatus04 = document.querySelector('#cat-status04')
var catStatus05 = document.querySelector('#cat-status05')
var catStatus06 = document.querySelector('#cat-status06')
var catStatus07 = document.querySelector('#cat-status07')
var catStatus08 = document.querySelector('#cat-status08')
var otherImg01 = document.querySelector('#other-img01')
var otherImg02 = document.querySelector('#other-img02')
var otherImg03 = document.querySelector('#other-img03')
var otherImg04 = document.querySelector('#other-img04')

sendBtn.addEventListener('click', () => {
    const data = new FormData()

    data.append('top_cat_img', topImg.files[0])
    data.append('name', catName.value)
    data.append('info', catInfo.value)
    data.append('temperament', catTemperament.value)
    data.append('origin', catOrigin.value)
    data.append('life_span', catLifeSpan.value)
    data.append('adaptability', catStatus01.value)
    data.append('affection_level', catStatus02.value)
    data.append('child_frienfly', catStatus03.value)
    data.append('grooming', catStatus04.value)
    data.append('intelligence', catStatus05.value)
    data.append('health_issues', catStatus06.value)
    data.append('social_needs', catStatus07.value)
    data.append('stranger_friendly', catStatus08.value)
    data.append('cat_img01', otherImg01.files[0])
    data.append('cat_img02', otherImg02.files[0])
    data.append('cat_img03', otherImg03.files[0])
    data.append('cat_img04', otherImg04.files[0])

    fetch(baseApi + 'cat-info', {
        method: 'POST',
        body: data
    })
    location.reload()
})


const fileInputs = [
    topImg,
    otherImg01,
    otherImg02,
    otherImg03,
    otherImg04,
]

const fileInputsSpan = document.querySelectorAll('.picture-image')

fileInputs.forEach((element, position) => {
    element.addEventListener('change', (e) => {
        const inputTarget = e.target
        const file = inputTarget.files[0]
        if (file) {
            const reader = new FileReader()

            reader.addEventListener('load', (e) => {
                const readerTarget = e.target
                const img = document.createElement('img')
                img.src = readerTarget.result
                img.classList.add('picture-img')

                fileInputsSpan[position].innerHTML = ''
                fileInputsSpan[position].appendChild(img)
            })

            reader.readAsDataURL(file)

        }
    })
})
