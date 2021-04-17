import React, {useState, useEffect} from 'react';
import axios from 'axios';
//API Key from developers.giphy.com 
//create .env to dafely store API 
const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
    const[gif, setGif] = useState('');
    //we want to fetch the data asa the componet did mounts
    //useEffect accepts 2 parameters
    //1. global function
    //2. dependency array --> if empty, then useEffect
    //acts as a componentDidMount --> only happens
    //initially, on the first render
    const fetchGif = async() => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        
        const{data}  =  await axios.get(url);
        
        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);
    }

    useEffect(() => {
        fetchGif();
    }, []);

    const handleClick = () => {
        fetchGif();
    }
    return(
        //react fragment
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    );
}

export default Random;