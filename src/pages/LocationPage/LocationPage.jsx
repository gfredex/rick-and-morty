import {useEffect, useState} from "react";
import axios from "axios";

export const LocationPage = () => {
    const [locations, setLocations] = useState([]);
    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    })
    const [error, setError] = useState(null)

    const fetchData = (url) => {
        axios.get(url).then((res) => {
            setLocations(res.data.results);
            setInfo(res.data.info);
            setError(null);
        })
            .catch((err) => {
                setError(err.response.data.error)
            })
    }

    useEffect(() => {
        fetchData('https://rickandmortyapi.com/api/location')

    }, []);

    console.log(info);
    return (
        <div className={'pageContainer'}>
            <h1 className={'pageTitle'}>LocationPage</h1>

            {!error && locations.length && (
                <>
                    {locations.map((location) => {
                        // debugger;
                        return (
                            <div>
                                <ul key={location.id}>
                                    <li>Название локации: <b>{location.name}</b></li>
                                    <li>Тип локации: <b>{location.type}</b></li>
                                    <li>Измерение, в котором находится местоположение: <b>{location.dimension}</b></li>
                                    <li>Количество персонажей, которых видели в данной
                                        локации: <b>{location.residents.length}</b></li>
                                </ul>
                                <hr/>
                            </div>)
                    })}
                </>
            )}
        < /div>
    )
}