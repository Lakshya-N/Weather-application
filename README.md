# 🌦️ Weather Application

This is a web application that allows users to check the weather in any city around the world using the **OpenWeather API**.

## 🚀 Features

- Real-time weather updates
- Search by city name
- Displays temperature, humidity, weather condition, and more

## 🌐 API Used

This project uses the [OpenWeather API](https://openweathermap.org/api) to fetch weather data.

### 🔧 Sample API Call

```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=my_api_key`)
  .then(response => response.json())
  .then(data => console.log(data));
