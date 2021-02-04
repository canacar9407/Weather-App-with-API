const dateElement = document.querySelector(".date");
const locationElement = document.querySelector(".location");
const weatherElement = document.querySelector(".weather");
const button = document.querySelector(".btn");
const cityName = document.querySelector(".cityname");
const derece = document.querySelector(".derece");

const API_key = "9c08b584b6b81777c0c11164bf38f46c";
let city_name = "";
let URL = `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`

button.addEventListener("click", takeName);
async function takeName(){
    city_name = cityName.value;
    URL = `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;
    const response = await fetch(URL);
    console.log(response)
    if(response.status == 404){
        alert("Şehir Bulunamadı");
    }else{
        const responseJSON = await response.json();
        derece.innerHTML = parseInt(responseJSON.main.temp - 273) + "°C" ;
        var tarih = new Date();
        dateElement.innerHTML = tarih;
        if(responseJSON.weather[0].main == "Clouds"){
            console.log(responseJSON.weather.main)
            weatherElement.style.backgroundImage = 'url(https://memurlar.net/common/news/images/826304/headline.jpg)';
        }if(responseJSON.weather[0].main == "Thunderstorm"){
            console.log(responseJSON.weather.main)
            weatherElement.style.backgroundImage = 'url(https://www.mercurynews.com/wp-content/uploads/2020/08/SJM-L-LIGHTNING-0817-11.jpg)';
        }if(responseJSON.weather[0].main == "Drizzle"){
            console.log(responseJSON.weather.main)
            weatherElement.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/5/5b/Row_of_poplars_in_the_drizzle_-_geograph.org.uk_-_591822.jpg)';
        }if(responseJSON.weather[0].main == "Rain"){
            console.log(responseJSON.weather.main)
            weatherElement.style.backgroundImage = 'url(https://www.treehugger.com/thmb/6u0wbqYvi-7wxKEoueucTLDcttM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__03__raindrops-plants-smell-57c4545c1bb844c0a2cd7e0252cf6d2f.jpg)';
        }if(responseJSON.weather[0].main == "Snow"){
            console.log(responseJSON.weather.main)
            weatherElement.style.backgroundImage = 'url(https://assets.climatecentral.org/images/made/2020Snow-report-cover-image_1000_664_s_c1_c_c.jpg)';
        }if(responseJSON.weather[0].main == "Clear"){
            console.log(responseJSON.weather.main)
            weatherElement.style.backgroundImage = 'url(https://s7d2.scene7.com/is/image/TWCNews/img_3214_jpg-2)';

        }

    }

}

