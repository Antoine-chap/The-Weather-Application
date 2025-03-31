import  ap1  from "./ap1";

export default function button1() {
const button = document.getElementById('button');

button.addEventListener('click', async () => {
    const inputCity = document.getElementById('inputCity');
    const inputCountry = document.getElementById('inputCountry');
    const inputCityValue = inputCity.value;
    const inputCountryValue = inputCountry.value;
    const result = await ap1(inputCityValue,inputCountryValue);
    const ctx = document.createElement('canvas');
    ctx.className = 'card-ctx';
    cardsContainer.appendChild(ctx);

    const ArrChart = await Arr(result);
   new Chart(ctx.getContext('2d'),{
    type: 'line',
    data: {
      labels: ArrChart[0],
      datasets: [{
        label: 'Température',
        data: ArrChart[1],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  await Cards(result);

})
}

async function Arr(result) {
    const labels = [];
    const dataSets = [];

    result.list.forEach(element => {
        labels.push(element.dt_txt);
        dataSets.push(element.main.temp);

    });
    console.log()
    return [labels,dataSets,]
}



async function Cards(result) {
  const cardsContainer = document.getElementById('cardsContainer');
  const forecastsByDay = {};

  result.list.forEach(forecast => {
    const date = forecast.dt_txt.split(' ')[0];

    if (!forecastsByDay[date]) {
      forecastsByDay[date] = [];
    }
    forecastsByDay[date].push(forecast);
  });
  


  for (const [date, forecasts] of Object.entries(forecastsByDay)) {
    const card = document.createElement('div');
    card.className = 'weather-card';
    const inputCity = document.getElementById('inputCity');
    card.textContent = inputCity.value;

    const dateObj = new Date(date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('fr-FR', options);

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.textContent = formattedDate;
    card.appendChild(cardHeader);

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    forecasts.forEach(forecast => {
      const forecastTime = forecast.dt_txt.split(' ')[1].substring(0, 5); 
      const temp = Math.round(forecast.main.temp) + '°C';
      const iconCode = forecast.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
      const description = forecast.weather[0].description;
      const pop = Math.round(forecast.pop*100) + '%';


      const forecastItem = document.createElement('div');
      forecastItem.className = 'forecast-item';

      const timeElement = document.createElement('span');
      timeElement.className = 'forecast-time';
      timeElement.textContent = forecastTime;
      forecastItem.appendChild(timeElement);

      const iconElement = document.createElement('img');
      iconElement.src = iconUrl;
      iconElement.alt = description;
      iconElement.className = 'forecast-icon';
      forecastItem.appendChild(iconElement);

      const popElement = document.createElement('span');
      popElement.className = 'forecast-pop';
      popElement.textContent = pop;
      forecastItem.appendChild(popElement);


      const tempElement = document.createElement('span');
      tempElement.className = 'forecast-temp';
      tempElement.textContent = temp;
      forecastItem.appendChild(tempElement);

      cardContent.appendChild(forecastItem);
    });

    card.appendChild(cardContent);

    cardsContainer.appendChild(card);
  }
}
