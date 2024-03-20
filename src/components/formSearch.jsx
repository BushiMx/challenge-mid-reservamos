import { useState, useEffect, useRef } from 'react';

const RESERVAMOS_ENDPOINT_URL = `https://search.reservamos.mx/api/v2/places?q=`


export default function FormSearch(props) {
    const {handleInfo} = props;
    const [inputValue, setInputValue] = useState('');
    const [City, setCity] = useState([]);
    const [filterCityList, setFilterCityList] = useState(City);
    
    var input = useRef(null);

    useEffect(() =>{
        fetch(RESERVAMOS_ENDPOINT_URL)
            .then(res => {
                if (!res.ok){
                    return Error("Hay un error")
                }
                return res.json();
            })
            .then(data=>setCity(data))
    },[])

    const filterCity = (value) => {
        setInputValue(value)
        const filterCitys = City.filter(City => City.city_name.toLowerCase().includes(inputValue.toLowerCase()));
        setFilterCityList(filterCitys)
    }        

    const handleOnClick = (display, id) =>{
        const citySearch = (City.filter(City => City.id === id))
        input.current.value = display;
        setInputValue(display);
        const lat = citySearch[0].lat
        const lon = citySearch[0].long
        setFilterCityList([]);
        handleInfo({lat, lon});
    }
    
    return (
        <>
            <label>
                Ciudad:  
                <input
                    autoFocus
                    ref={input}
                    value={inputValue}
                    name='search'
                    type='search'
                    autoComplete='off'
                    onChange={e => filterCity(e.target.value)} />
            </label>
            <div className='lista-ciudad'>
                
                <ul>
                    {filterCityList && filterCityList.map(City => {
                        return (
                            <li style={{ cursor: 'pointer', listStyle: 'none' }}
                                key={City.id}
                                onClick={() => handleOnClick(City.display, City.id)}>
                                {City.display}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

