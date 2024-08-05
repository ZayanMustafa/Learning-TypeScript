interface WeatherData {
    name: string;
    weather: {
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
}

const apiKey = 'c4e0d2948e7e7381cab80da38c3780b0'; 

const searchButton = document.getElementById('search-button') as HTMLButtonElement;
const cityInput = document.getElementById('city-input') as HTMLInputElement;
const weatherResult = document.getElementById('weather-result') as HTMLDivElement;
const modeToggle = document.getElementById('mode-toggle') as HTMLButtonElement;
const modeIcon = document.getElementById('mode-icon') as HTMLElement;

searchButton.addEventListener('click', () => {
    const cityName = cityInput.value;
    getWeather(cityName);
});

async function getWeather(city: string) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data: WeatherData = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherResult.innerHTML = `<p class="text-red-400">${error}</p>`;
    }
}

function displayWeather(data: WeatherData) {
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
    } else {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }
});
