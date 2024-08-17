document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.getElementById('weather-form');
    const locationInput = document.getElementById('location-input');
    const weatherResult = document.getElementById('weather-result');
    const locationName = document.getElementById('location-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');

    const apiKey = 'a776f7033afec29a0120add51d86c3b4'; // Replace with your OpenWeatherMap API key

    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const location = locationInput.value.trim();
        if (location) {
            fetchWeather(location);
        }
    });

    const fetchWeather = (location) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    locationName.textContent = data.name;
                    temperature.textContent = data.main.temp;
                    description.textContent = data.weather[0].description;
                    humidity.textContent = data.main.humidity;
                    windSpeed.textContent = data.wind.speed;
                    weatherResult.classList.remove('hidden');
                } else {
                    alert('Location not found. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('An error occurred while fetching weather data. Please try again.');
            });
    };
});
