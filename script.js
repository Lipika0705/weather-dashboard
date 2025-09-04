const API_KEY = '5cae479228f9bec6a4cd888cfd3baf15';  // Your API key here

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json(); // This should be outside the if block
    })
    .then(data => {
      const weatherBox = document.getElementById("weatherResult");
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const icon = data.weather[0].icon;

      weatherBox.innerHTML = `
        <h3>${data.name}</h3>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" />
        <p><strong>${temp}°C</strong></p>
        <p>${desc}</p>
      `;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML =
        `<p style="color:red;">${error.message}</p>`;
    });
}
