import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainerStyled, LinksContainerStyled } from './FooterStyled';
import { IoLogoFacebook, IoLogoWhatsapp, IoLogoInstagram} from "react-icons/io";

const Footer = () => {
  return (
    <FooterContainerStyled>
      <LinksContainerStyled className='links'>
        <Link to='/' style={{ paddingLeft: '2rem'}}>
          <IoLogoFacebook size={"3em"} />
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem'}}>
          <IoLogoWhatsapp size={"3em"}/>
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          <IoLogoInstagram size={"3em"} />
        </Link>
      </LinksContainerStyled>
      <p>
       <span> YOU EYES.NET</span>
      </p>
    </FooterContainerStyled>
  );
};

export default Footer;