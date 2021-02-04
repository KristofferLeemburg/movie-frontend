import React, { useState } from "react"
import { VscTriangleRight } from 'react-icons/vsc';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';

function Cardwrapper({ logo, title }) {

    const [bgColorLike, setBgColorLike] = useState(false)
    const [bgColorDisLike, setBgColorDisLike] = useState(false)
    const url = `https://image.tmdb.org/t/p/w500`

    function Buttons() {
        return (
            <div className="buttons">
                <button onClick={() => setBgColorLike((bgColorLike) => !bgColorLike)} className={`like-button ${bgColorLike ? "green" : ""}`}><BiLike /></button>
                <button onClick={() => setBgColorDisLike((bgColorDisLike) => !bgColorDisLike)} className={`dislike-button ${bgColorDisLike ? "red" : ""}`}><BiDislike /></button>
                <button className='info-play-button'><VscTriangleRight className='play-button-icon' />Afspelen</button>
                <button className='add-button' ><AiOutlinePlus /></button>
            </div>
        );
    }

        // for (let i = 0; i < 40; i++) {
        //     logo.push(logo[i] = title[i])
        //     console.log(logo)
        // }



        return (
            <>
                <div>
                    <ul className="cards-wrapper">
                        <div className="parent">
                            <img src={`${url}${logo[0]}`} alt="" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[0]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[1]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[1]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[2]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[2]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[3]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[3]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[4]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[4]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[5]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[5]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[6]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[6]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[7]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[7]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[8]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[8]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[9]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                            <div className="popup">
                                <Buttons />
                                {`${title[9]}`}
                            </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[10]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                            <div className="popup">
                                <Buttons />
                                {`${title[9]}`}
                            </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[11]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[11]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[12]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[12]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[13]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[13]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[14]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[14]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[15]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[15]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[16]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[16]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[17]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[17]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[18]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[18]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[19]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[19]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[20]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[20]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[21]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[21]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[22]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[22]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[23]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[23]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[24]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[24]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[25]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[25]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[26]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[26]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[27]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[27]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[28]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[28]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[29]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[29]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[30]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[30]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[31]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[31]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[32]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[32]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[33]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[33]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[34]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[34]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[35]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[35]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[36]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[36]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[37]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[37]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[38]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[38]}`}
                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <img src={`${url}${logo[39]}`} alt="logo" className="laneimg" />
                            <div className="parent-popup">
                                <div className="popup">
                                    <Buttons />
                                    {`${title[39]}`}
                                </div>
                            </div> *
          </div>
                    </ul>
                </div>
            </>
        );
    };
    export default Cardwrapper;