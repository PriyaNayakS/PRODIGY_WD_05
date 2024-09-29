const apikey = "67ae2a46010e2d7449fa0c2527ba63ca";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

// const location_not_found = document.querySelector('.location-not-found');
// if(weather_data.cod === `404`){
//     location_not_found.style.display = "flex";
//     weather_body.style.display = "none";
//     console.log("error");
//     return;
// }


async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "cloud.png";
        } else if (data.weather[0].main == "Clear") {
            weathericon.src = "clear.png";
        } else if (data.weather[0].main == "Rain") {
            weathericon.src = "rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "snow.png";
        } else if (data.weather[0].main == "Mist") {
            weathericon.src = "clear.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}


// console.log(data);
searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);

})

// checkWeather();
