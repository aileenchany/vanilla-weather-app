function formatDate (timestamp) {
    let now = new Date(timestamp);

    let hours = now.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
    minutes = `0${minutes}`;
    }
    let amOrPm = now.getHours() < 12 ? "am" : "pm";

    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let day = days[now.getDay()];

    let month = now.getMonth() + 1;
    let date = now.getDate();
    return `${day}, ${month}/${date}, ${hours}:${minutes} ${amOrPm}`

}
function displayTemperature(response) {
    document.querySelector("#current-temp").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#country").innerHTML = response.data.sys.country;
    document.querySelector("#description").innerHTML = response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind-speed").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#feels-like-temp").innerHTML = Math.round(response.data.main.feels_like)
    document.querySelector("#high-temp").innerHTML = Math.round(response.data.main.temp_max);
    document.querySelector("#low-temp").innerHTML = Math.round(response.data.main.temp_min);
    //Below is a function that gets the current date & time data from the OpenWeather API.
    //dt = unixtime GMT (greenwich mean time). It is the number of seconds since Jan 1st, 1970. 
    //We need to multiply dt by 1000 to turn it into milisecondshis to get the current date and time
    document.querySelector("#date").innerHTML = formatDate(response.data.dt * 1000);
}

function search(city) {
    let apiKey = "f9ed2779c7a88244e3c6c97a1ad830b5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayTemperature);
    }

function handleSubmit(event) {
    event.preventDefault();
    //Below we access the input and then we use its value in the search function.
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}

//This allows the form to listen for a submit and kickstarts the handleSubmit function.
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

//This calls the function named "search" & the weather of the default city "New York" is displayed.
search("New York");