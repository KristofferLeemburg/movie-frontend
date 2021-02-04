import React from "react";
import axios from 'axios';
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

const title = [];
const logo = [];

function LaneActor() {


    const fetchData = async () => {
      const response = await axios(
        'http://192.168.2.9:8080/movies/discover/johnnydepp',
      );
      for (let i = 0; i < 40; i++) {
        logo.push(logo[i] =  response.data[i].backdrop_path)
        title.push(title[i] =  response.data[i].title)
        }
    };
    fetchData();


  return (
    <>
      <h3>Actor's movies</h3>
      <div>
      <Cardwrapper logo={logo} title={title} />
      </div>
    </>
  );
};
export default LaneActor;