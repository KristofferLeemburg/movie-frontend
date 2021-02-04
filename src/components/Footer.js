import React from 'react';
import '../styles/Footer.css'
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div> 
      <div className="footer-iconbox">
    <a href="https://www.facebook.com/NetflixNederland">
      <AiOutlineFacebook />
    </a>
    <a href="https://www.instagram.com/netflixnl/?hl=nl">
      <AiOutlineInstagram />
    </a>
    <a href="https://twitter.com/netflix">
      <AiFillTwitterSquare />
    </a>
    <a href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw">
      <AiOutlineYoutube />
    </a>
  </div>
        <div className="footer-links">
          <div className="link-container">
          <Link to="/AudioOndertiteling">
            <li>Audio en ondertiteling</li>
          </Link>
          <Link to="/Mediacenter">
            <li>Mediacenter</li>
          </Link>
          <Link to="/Privacy">
            <li>Privacy</li>
          </Link>
          <Link to="/Contact">
            <li>Contact opnemen</li>
          </Link>
          </div>
          <div className="link-container">
          <Link to="/Audiodescriptie">
            <li>Audiodescriptie</li>
          </Link>
          <Link to="/Beleggersrelaties">
            <li>Relaties met investeerders</li>
          </Link>
          <Link to="/WettelijkeBepalingen">
            <li>Wettelijke bepalingen</li>
          </Link>
          </div>
          <div className="link-container">
          <Link to="/Helpcenter">
            <li>Helpcenter</li>
          </Link>
          <Link to="/Vacatures">
            <li>Vacatures</li>
          </Link>
          <Link to="/Cookievoorkeuren">
            <li>Cookievoorkeuren</li>
          </Link>
          </div>
          <div className="link-container">
          <Link to="/Cadeaubonnen">
            <li>Cadeaubonnen</li>
          </Link>
          <Link to="/Bedrijfsgegevens">
            <li>Bedrijfsgegevens</li>
          </Link>
          <Link to="/Gebruiksvoorwaarden">
            <li>Gebruiksvoorwaarden</li>
          </Link>
          </div>
       </div>
     </div>
  );
}

export default Footer;
