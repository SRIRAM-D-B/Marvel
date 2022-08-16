import {useEffect, useState} from 'react';
import axios from 'axios';

const Comic = () => {
    const [comics, setComics] = useState([]);
    useEffect(() => { 
        axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&limit=100&apikey=73bb2191c6712db787d2c0179f2d0448&hash=5fb6ea582f636e3f231e5461d4c4323c`).then((result) => {
        console.log(result.data.data.results);
        setComics(result.data.data.results);
        })
    }, [])
    return (
        <div>Comic</div>
    )
}

export default Comic