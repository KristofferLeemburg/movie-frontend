import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

const title = [];
const logo = [];

function LaneFantasy() {


  async function fetchMoviesJSON() {
    const response = await fetch('http://192.168.2.9:8080/movies/genre/fantasy');
    const movies = response.json();
    return movies;
  }
  fetchMoviesJSON().then(response => {
    for (let i = 0; i < 40; i++) {
      logo.push(logo[i] = response[i].backdrop_path)
      title.push(title[i] = response[i].title)
    }
  });

  
  return (
    <>
      <h3>Fantasy</h3>
      <div>
        <Cardwrapper logo={logo} title={title} />
      </div>
    </>
  );
};
export default LaneFantasy;