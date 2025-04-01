export default function getWeatherFromLocalStorage(city, country) {
    const storageKey = `weather_${city}_${country}`;
    const savedData = localStorage.getItem(storageKey);
    
    if (savedData) {
      return JSON.parse(savedData);
    }
    
    return null;
  }