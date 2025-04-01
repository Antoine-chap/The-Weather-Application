export default async function WeatherApi(city,country) {
    const ApiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${ApiKey}`;
    try {
         if (typeof(city) !== 'string') {
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
        return (data);
    } catch (error) {
        console.error('Problème :', error);
    }
};
