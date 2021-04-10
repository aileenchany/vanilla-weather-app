function displayTemperature(response) {
    console.log(response.data);
    document.querySelector("#current-temp").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#country").innerHTML = response.data.sys.country;
    document.querySelector("#description").innerHTML = response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind-speed").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#feels-like-temp").innerHTML = Math.round(response.data.main.feels_like)
    document.querySelector("#high-temp").innerHTML = Math.round(response.data.main.temp_max);
    document.querySelector("#low-temp").innerHTML = Math.round(response.data.main.temp_min);
}

let apiKey = "f9ed2779c7a88244e3c6c97a1ad830b5";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);