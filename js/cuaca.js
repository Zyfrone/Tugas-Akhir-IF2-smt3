const apiKey = 'ISI_API_KEY_ANDA'; // Ganti dengan API Key OpenWeatherMap
const city = 'Jakarta';
const units = 'metric'; // Celsius

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const details = document.querySelector('.details');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=id`)
  .then(response => response.json())
  .then(data => {
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherIcon.src = icon;
    weatherIcon.alt = desc;
    temperature.textContent = `${temp}°C`;
    description.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
    details.textContent = `Kelembapan: ${humidity}% | Angin: ${wind} m/s`;
  })
  .catch(err => {
    description.textContent = "Gagal memuat data cuaca";
    console.error(err);
  });
