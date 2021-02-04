import React, { useState, useRef } from "react";
import ReactPlayer from 'react-player'
import '../styles/Info.css';
import { VscTriangleRight } from 'react-icons/vsc';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import screenfull from 'screenfull'

function Info({ title, logo, youtube, overview, backdrop, toggleTrueFalse }) {
  const [fullScreen, setFullScreen] = useState(false)
  const [bgColorLike, setBgColorLike] = useState(false)
  const [bgColorDisLike, setBgColorDisLike] = useState(false)
  const [wait, setWait] = useState(backdrop)

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => document.body.style.overflow = '';
  // }, []);

  const logName = () => {
    setWait("")
  }
  setTimeout(logName, 1500)

  const player = useRef(null);

  const handleClickFullscreen = () => {
    if (screenfull.isEnabled) {
      setFullScreen(true);
      screenfull.request(player.current.wrapper);
    }
  }
  const youtubebackground = `https://www.youtube.com/watch?v=${youtube}`
  return (
      <div className="popup-container">
        <div className="popup">
        <div className="click-left" onClick={toggleTrueFalse} />
        <div className="click-right" onClick={toggleTrueFalse} />
        <div className="reactplayer">
            <ReactPlayer
              ref={player}
              light={wait}
              url={youtubebackground}
              playing={true}
              controls={false}
              loop={true}
              width="cover"
              height="500px"
              // playIcon={<button className='info-play-button' onClick={handleClickFullscreen}><VscTriangleRight className='play-button-icon' />Afspelen</button>}
              playIcon={fullScreen}
              mute
            />
            <AiOutlineCloseCircle onClick={toggleTrueFalse} className='close-button' />
            <div className="movie-logo-container">
            <img className="info-movie-logo" src={logo} alt="logo" />
            <button className='info-play-button' onClick={handleClickFullscreen}><VscTriangleRight className='play-button-icon' />Afspelen</button>
            <button className='add-button' ><AiOutlinePlus /></button>
            <button onClick={() => setBgColorLike((bgColorLike) => !bgColorLike)} className={`like-button ${bgColorLike ? "green": ""}`}><BiLike /></button>
            <button onClick={() => setBgColorDisLike((bgColorDisLike) => !bgColorDisLike)} className={`dislike-button ${bgColorDisLike ? "red" : ""}`}><BiDislike /></button>
            </div>
            <div>
              <div className="movieExcerpt">
                <p className="movie-title">Over {title} </p>
                <p className="movie-overview">{overview}</p>
              </div>
              <div className="infoDetails">
                <p className="extraInfo">Genres: <span>Crime, Thiller, Drama</span></p>
                <p className="extraInfo">Naam regisseur: <span>Todd Phillips</span></p>
                <p className="extraInfo">Duur: <span>122 min</span></p>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};
export default Info;
