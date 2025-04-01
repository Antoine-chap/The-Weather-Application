export default async function Arr(result) {
    const labels = [];
    const dataSets = [];

    result.list.forEach(element => {
        labels.push(element.dt_txt);
        dataSets.push(element.main.temp);

    });
    console.log()
    return [labels,dataSets,]
}