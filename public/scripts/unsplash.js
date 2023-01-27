window.onload = (e) => {
    fetchData()
}

let images = []
const fetchData = async () => {
    try {
        const url = await fetch(`https://api.unsplash.com/search/photos?page=100&per_page=100&query=city&client_id=X1i6ViOrCXSghlM1KAonZRXkFDQFW94b7r_JjzvEbO4`)
        const data = await url.json()
        const imgs = data.results
        findAndShow(imgs)
    } catch (error) {
        error
    }
}

const findAndShow = (result) => {
    result.forEach(element => {
        let imgUrl = element.urls.regular
        images.push(imgUrl)
    });
    let background =  Math.floor(Math.random() * images.length)
    document.body.style.backgroundImage = `url(${images[background]})`
}

