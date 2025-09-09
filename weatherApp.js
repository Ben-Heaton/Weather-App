function getWeather() {
    let CITY = document.getElementById('city_selector').value;
    const API_KEY = '###';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
    
    console.log('Request sent');

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log('Getting weather data...');
            console.log(data);
            
            // Get elements right when we need them
            document.getElementById('app_city_Span').textContent = data.name;
            document.getElementById('app_temperature_Span').textContent = data.main.temp + '°C';
            document.getElementById('app_description_Span').textContent = data.weather[0].description;
        })
        .catch(error => {
            console.log('Error:', error);
            alert('Something went wrong getting the weather!');
        });
}

