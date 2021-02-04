import React from 'react';
import '../styles/App.css';
import LaneComedy from '../components/LaneComedy';
import LaneAction from '../components/LaneAction';
import LaneThriller from '../components/LaneThriller';
import LaneFamily from '../components/LaneFamily';
import LaneFantasy from '../components/LaneFantasy';
import LaneCrime from '../components/LaneCrime';
import LaneAdventure from '../components/LaneAdventure';



function Film() {


  return (
    <div>
      <div className="container-film">
        <LaneComedy />
        <LaneAction />
        <LaneThriller />
        <LaneFamily />
        <LaneFantasy />
        <LaneCrime />
        <LaneAdventure />
      </div>
    </div>
  );
}
export default Film;
