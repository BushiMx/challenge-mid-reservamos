import { useState } from 'react'
import './App.css'
import FormSearch from "./components/formSearch";
import ListaClima from './components/listaClima';

function App() {

  const [show, setShow] = useState(false);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const handleInfo = (inputValues) => {
    const lat = inputValues.lat;
    const lon = inputValues.lon;
    setShow(true);
    setLat(lat);
    setLon(lon);
  };
  
  var year = new Date().getFullYear();
  var today = new Date().getDate();
  var thisMonth = new Date().getMonth();

  let dates = [];

  for (let i = 0; i < 5; i++) {
    dates.push(new Date(year, thisMonth, today + i).toDateString().split(" "));
    switch (dates[i][0]) {
      case "Sun":
        dates[i][0] = "Domingo";
        break;
      case "Mon":
        dates[i][0] = "Lunes";
        break;
      case "Tue":
        dates[i][0] = "Martes";
        break;
      case "Wed":
        dates[i][0] = "Miercoles";
        break;
      case "Thu":
        dates[i][0] = "Jueves";
        break;
      case "Fri":
        dates[i][0] = "Viernes";
        break;
      case "Sat":
        dates[i][0] = "Sabado";
        break;
      default:
        console.log("Error");
    }
    switch (dates[i][1]) {
      case "Jan":
        dates[i][1] = "Enero";
        break;
      case "Feb":
        dates[i][1] = "Febrero";
        break;
      case "Mar":
        dates[i][1] = "Marzo";
        break;
      case "Apr":
        dates[i][1] = "Abril";
        break;
      case "May":
        dates[i][1] = "Mayo";
        break;
      case "Jun":
        dates[i][1] = "Junio";
        break;
      case "Jul":
        dates[i][1] = "Julio";
        break;
      case "Aug":
        dates[i][1] = "Agosto";
        break;
      case "Sep":
        dates[i][1] = "Septiembre";
        break;
      case "Oct":
        dates[i][1] = "Octubre";
        break;
      case "Nov":
        dates[i][1] = "Noviembre";
        break;
      case "Dec":
        dates[i][1] = "Diciembre";
        break;
      default:
        console.log("Error");
    }
  }

  return (
    <>
      <header className='App-header'>
      <h1>Code Challenge Reservamos</h1>
      <p>Busca una ciudad para conocer el clima de los siguientes 5 dias</p>
      <section>
          <FormSearch handleInfo={handleInfo} />
      </section>
      </header>
      <>
          {show && (
            <section className="clima">
              <ListaClima
                index="0"
                lat={lat}
                lon={lon}
                day={dates[0][0]}
                today={dates[0][2]}
                thisMonth={dates[0][1]}
              />
              <ListaClima
                index="8"
                lat={lat}
                lon={lon}
                day={dates[1][0]}
                today={dates[1][2]}
                thisMonth={dates[1][1]}
              />
              <ListaClima
                index="16"
                lat={lat}
                lon={lon}
                day={dates[2][0]}
                today={dates[2][2]}
                thisMonth={dates[2][1]}
              />
              <ListaClima
                index="24"
                lat={lat}
                lon={lon}
                day={dates[3][0]}
                today={dates[3][2]}
                thisMonth={dates[3][1]}
              />
              <ListaClima
                index="32"
                lat={lat}
                lon={lon}
                day={dates[4][0]}
                today={dates[4][2]}
                thisMonth={dates[4][1]}
              />
            </section>
          )}
        </>
    </>
  )
}

export default App
