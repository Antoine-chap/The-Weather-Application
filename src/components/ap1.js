 export async function ap1(country) {
    const ApiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=${ApiKey}`;
    try {
        if (typeof(country) !== 'string') {
            throw new Error('Erreur réseau');
        }
        const reponse = await fetch(url);
        if (!reponse.ok) {
            throw new Error('Erreur réseau');
        }
        const data = await reponse.json();
        if (data.length === 0) {
            throw new Error('Not at city');
        }
        console.log(data);
        return (data);
    } catch (error) {
        console.error('Problème :', error);
    }
};





// async function test() {
//     let res = await ap1('rome');
//     // console.log(res[0].name,res[0].lat,res[0].lon);
// }
// // console.log(ap1('rome'));
// test();