function getWeather() {
    
    // API configuration - store your key and build the request URL
    const API_KEY = '###'; // Your personal OpenWeatherMap API key
    // URL breakdown: q=London (city to search), appid=${API_KEY} (your authentication), units=metric (Celsius temperatures)
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;
    
    // Log to console for debugging - shows the function started
    console.log('Request sent');
    
    // Make the API request using fetch() - this sends a request to OpenWeatherMap's server
    fetch(API_URL)
        
    // First .then() - convert the response from the server into usable JavaScript data
        .then(response => response.json()) // response.json() converts the raw response into a JavaScript object
        
        // Second .then() - now we have the actual weather data to work with
        .then(data => {
            console.log('Getting weather data...'); // Debugging message
            console.log(data); // Show the complete weather data object in console - useful for seeing what's available
            
            // Update the HTML elements with the weather information
            // Find each span by its ID and replace the text content with real data
            document.getElementById('app_city_Span').textContent = data.name; // data.name contains the city name
            document.getElementById('app_temperature_Span').textContent = data.main.temp + '°C'; // data.main.temp is the temperature
            document.getElementById('app_description_Span').textContent = data.weather[0].description; // data.weather[0].description is weather condition
        })
        
        // .catch() - handles any errors that might occur during the API request
        .catch(error => {
            console.log('Error:', error); // Log the error details for debugging
            alert('Something went wrong getting the weather!'); // Show user-friendly error message
        });
}