const searchForm = document.querySelector(".search-input");

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let apiKey = "t422032f5oa11113f5b0fbcadff3ac4a";
  let cityInput = searchForm.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherData);
});

function displayWeatherData(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let description = response.data.condition.description;
  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;
  const timestamp = response.data.time;
  const date = new Date(timestamp * 1000);

  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  let iconUrl = response.data.condition.icon_url;
  let icon = response.data.condition.icon;

  document.getElementById("city").textContent = city;
  document.getElementById("temperature").textContent = temperature;
  document.querySelector(".current-day").textContent = day;
  document.querySelector(".current-time").textContent = time;
  document.querySelector(".description").textContent = description;
  document.querySelector(".humidity").textContent = humidity + "%";
  document.querySelector(".wind").textContent = wind + "km/h";

  document.querySelector(".current-temperature-icon").src = iconUrl;
  document.querySelector(".current-temperature-icon").alt = icon;
}
