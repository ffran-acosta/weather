window.addEventListener('load', () => {
  let city = 'city'
  unsplash(city);
  weather();
});

//unsplash API consumption
const unsplash = (city) => {
  //url construction + line 2
  let urlApi = "https://api.unsplash.com/search/photos?query=";
  let apiKey = "&client_id=X1i6ViOrCXSghlM1KAonZRXkFDQFW94b7r_JjzvEbO4";
  //unsplash API consumption 
  const fetchData = async () => {
    try {
      const url = await fetch(urlApi + city + apiKey);
      const data = await url.json();
      const imgs = data.results;
      findAndShow(imgs);
    } catch (error) {
      error;
    }
  };
  fetchData()
  //images results
  let images = [];
  const findAndShow = (result) => {
    result.forEach((element) => {
      let imgUrl = element.urls.regular;
      images.push(imgUrl);
    });
    let background = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[background]})`;
  };
};



const weather = () => {
  //wheather app init
  let searchButton = document.querySelector('.search-button')
  searchButton.addEventListener('click', () => {
    let searchBar = document.querySelector('.search-bar')
    // url construction
    let city = searchBar.value
    let urlApi = 'https://api.openweathermap.org/data/2.5/weather?q='
    let config = "&units=metric&appid="
    let apiKey = "88dd34dd82ba276afcaaac94d832a513";
    let cityUrl = urlApi + city + config + apiKey
    //whether api init
    fetchData(cityUrl)   
    //unsplash API reinit
    unsplash(city)
  })
  //weather API consumption 
  const fetchData = async (city) => {
    try {
      let url = await fetch(city);
      let data = await url.json();
      let weather = data
      cityData(weather)
    } catch (error) {
      error;
    }
  };
  //data show on display
  const cityData = (weather) => {
    //show card
    let card = document.querySelector('.weather')
    card.style.display = 'block'
    //capture data
    let city = weather.name;
    let tempreture = weather.main.temp;
    let main = weather.weather[0].main
    let humidity = weather.main.humidity
    let wind = weather.wind.speed;
    //capture elements
    let cityElement = document.querySelector('.city span')
    let tempElement = document.querySelector('.temp span')
    let mainElement = document.querySelector('.description span')
    let humidityElement = document.querySelector('.humidity span')
    let windElement = document.querySelector('.wind span')
    //assign data to element
    cityElement.textContent = city;
    tempElement.textContent = tempreture;
    mainElement.textContent = main;
    humidityElement.textContent = humidity;
    windElement.textContent = wind;
  }
}

//URL CON KEY PROVISORIA
//https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=88dd34dd82ba276afcaaac94d832a513
//'apiKey': '88dd34dd82ba276afcaaac94d832a513'

//ESPERER ACTIVACION
//'apiKey': 'db60a324c334ac86ba951e414744cbb0'

//URL BASE
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
