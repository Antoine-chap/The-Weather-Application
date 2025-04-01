
import button1 from "./components/button.js"
import "./ui/style.css"
button1();


function loadLastSearch() {

    const weatherKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('weather_')) {
        weatherKeys.push(key);
      }
    }
    

    if (weatherKeys.length > 0) {

      const lastKey = weatherKeys[weatherKeys.length - 1];
      

      const [_, city, country] = lastKey.split('_');
      

      const inputCity = document.getElementById('inputCity');
      const inputCountry = document.getElementById('inputCountry');
      
      if (inputCity && inputCountry) {
        inputCity.value = city;
        inputCountry.value = country;
        

        document.getElementById('button').click();
      }
    }
  }
  

  document.addEventListener('DOMContentLoaded', loadLastSearch);