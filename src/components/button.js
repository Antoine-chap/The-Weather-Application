import checkAndAddDeleteButton from "./checkAndAddDeleteButton.js"
import Cards from "./cards.js"
import getWeatherFromLocalStorage from "./getWeatherFromLocalStorage.js"
import WeatherApi from "./WeatherApi.js"


export default function button1() {
const button = document.getElementById('button');

button.addEventListener('click', async () => {
    const inputCity = document.getElementById('inputCity');
    const inputCountry = document.getElementById('inputCountry');
    const inputCityValue = inputCity.value;
    const inputCountryValue = inputCountry.value;
    let result = getWeatherFromLocalStorage(inputCityValue, inputCountryValue);
    
    if (!result) {
        result = await WeatherApi(inputCityValue, inputCountryValue);
    }

  await Cards(result);
  checkAndAddDeleteButton();

})
}