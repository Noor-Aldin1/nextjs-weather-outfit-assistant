export async function getWeather(city) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  
  if (!apiKey) {
    throw new Error('OPENWEATHER_API_KEY is not set');
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`,
      { next: { revalidate: 300 } } // Cache for 5 minutes
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found');
      }
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    
    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      description: data.weather[0].description,
      main: data.weather[0].main,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      icon: data.weather[0].icon,
      condition: data.weather[0].main.toLowerCase(),
    };
  } catch (error) {
    throw error;
  }
}

