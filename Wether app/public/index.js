"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const apiKey = 'c4e0d2948e7e7381cab80da38c3780b0';
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
searchButton.addEventListener('click', () => {
    const cityName = cityInput.value;
    getWeather(cityName);
});
function getWeather(city) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = yield response.json();
            displayWeather(data);
        }
        catch (error) {
            weatherResult.innerHTML = `<p class="text-red-400">${error}</p>`;
        }
    });
}
function displayWeather(data) {
    const weatherHTML = `
        <h2 class="text-2xl font-bold">${data.name}</h2>
        <p class="text-lg">${data.weather[0].description}</p>
        <p class="text-xl font-semibold">Temperature: ${data.main.temp}°C</p>
        <p class="text-lg">Humidity: ${data.main.humidity}%</p>
        <p class="text-lg">Wind Speed: ${data.wind.speed} m/s</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" class="mt-2">
    `;
    weatherResult.innerHTML = weatherHTML;
}
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
    else {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }
});
