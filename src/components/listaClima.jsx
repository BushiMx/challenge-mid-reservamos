import { useState, useEffect } from 'react';


export default function ListaClima({index, lat, lon, day, today, thisMonth}) {
    let indexInicio = index;
    const [Weather, setWeather] = useState([]);
    const API_KEY = `0eebd1fcf852d29ca0340c5c451d4c9a`;
    const WEATHER_ENDPOINT_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    useEffect(() =>{
        fetch(WEATHER_ENDPOINT_URL)
            .then(response => response.json())  // convertir a json
            .then(data=>setWeather(data))
            .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
    },[WEATHER_ENDPOINT_URL])


if (Weather.length !== 0){    
    // --- Convertir objeto de datos en Array
    const dataArray = Object.entries(Weather);

    // --- Crear Array con los valores de Temperatura minimos
    var tempMinArray = [];

    for (let index = 0; index < 40; index++) {
        tempMinArray.push(dataArray[3][1][index].main.temp_min)
    }

    // --- Obtener la tenperatura minima por dia 
    var tempMinDia1 = tempMinArray.splice(indexInicio,8);
    tempMinDia1.sort((a, b)=> a - b);
    tempMinDia1.splice(1,7);

    // --- Crear Array con los valores de Temperatura maximos
        var tempMaxArray = [];

        for (let index = 0; index < 40; index++) {
            tempMaxArray.push(dataArray[3][1][index].main.temp_max)
        }
        
    // --- Obtener la tenperatura maxima por dia 
    var tempMaxDia1 = tempMaxArray.splice(indexInicio,8);
    tempMaxDia1.sort((a, b)=> b - a);
    tempMaxDia1.splice(1,7);
}

    return (
        <article className='clima-dia'>
            <h1>{day}</h1>
            <h1>{today} {thisMonth}</h1>
            <article>
                <h2>Temp. Minima</h2>
                <p>{tempMinDia1}</p>
            </article>
            <article>
                <h2>Temp. Maxima</h2>
                <p>{tempMaxDia1}</p>
            </article>
        </article>
    );
}
