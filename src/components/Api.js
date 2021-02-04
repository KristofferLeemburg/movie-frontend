import React, { useState } from 'react'
import App from '../pages/App';

require('dotenv').config()

async function HideApi() {
    const api = {
        "key": process.env.REACT_APP_API,
    }
    return api.key;
}
HideApi();

function Api() {
    const [bgimage, setBgimage] = useState("");
    const [overview, setOverview] = useState("");
    const [title, setTitle] = useState("")
    const [youtube, setYoutube] = useState("");
    const [logo, setLogo] = useState("");
    const backdrop = `https://image.tmdb.org/t/p/w1280/${bgimage}`
    const youtubebackground = `https://www.youtube.com/watch?v=${youtube}`

    Promise.all([
        fetch('https://api.themoviedb.org/3/movie/507076?api_key=33ea3e5328d23c13d33ed05add4783b7'),
        fetch('https://api.themoviedb.org/3/movie/507076/videos?api_key=33ea3e5328d23c13d33ed05add4783b7&language=en-US'),
        fetch('http://webservice.fanart.tv/v3/movies/507076?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c'),
        fetch('http://192.168.2.9:8080/movies/discover/80s')
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        setBgimage(data[0].backdrop_path)
        setOverview(data[0].overview);
        setTitle(data[0].title)
        setYoutube(data[1].results[0].key);
        setLogo(data[2].hdmovielogo[0].url);
        console.log(data);
    }).catch(function (error) {
        console.log(error);
    })
    return (
        <div className="App">
            <App backdrop={backdrop} overview={overview} title={title} youtube={youtube} youtubebackground={youtubebackground} logo={logo} />
        </div>
    );
}
export default Api;