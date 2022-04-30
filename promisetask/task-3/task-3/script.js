const root = document.querySelector('#root')
var page = 0

function loadMore() {
    page++
    const URL = `https://picsum.photos/v2/list?page=${page}&limit=10`
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            root.classList.add('row', 'justify-content-around')
            data
                .map((element) => {
                    const img = document.createElement('img')
                    img.src = element.download_url
                    img.width = Math.floor(element.width / 10)
                    img.height = Math.floor(element.height / 10)
                    const div = document.createElement('div')
                    div.classList.add('card', 'col-4', 'p-2', 'my-3')
                        // img.classList.add('card-img-top')
                    div.appendChild(img)
                    return div
                })
                .forEach((element) => {
                    root.appendChild(element)
                })
        })
}

loadMore()