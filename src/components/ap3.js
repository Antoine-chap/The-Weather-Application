import  ap1  from "./ap1";

export default function button1() {
const button = document.getElementById('button');

button.addEventListener('click', async () => {
    const inputCity = document.getElementById('inputCity');
    const inputCountry = document.getElementById('inputCountry');
    const inputCityValue = inputCity.value;
    const inputCountryValue = inputCountry.value;
    const result = await ap1(inputCityValue,inputCountryValue);
    const ctx = document.getElementById('graphique');
    const ArrChart = await Arr(result);
    console.log(ArrChart);
   new Chart(ctx,{
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
})
}

async function Arr(result) {
    const labels = [];
    const dataSets = [];
    result.list.forEach(element => {
        labels.push(element.dt_txt);
        dataSets.push(element.main.temp);
    });
    console.log(labels,dataSets)
    return [labels,dataSets]
}