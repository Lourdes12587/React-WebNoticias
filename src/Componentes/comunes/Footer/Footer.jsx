import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FooterContainerStyled, LinksContainerStyled } from './FooterStyled';
import { GiBoltEye } from 'react-icons/gi';
import { IoLogoFacebook, IoLogoWhatsapp, IoLogoInstagram, IoMailOutline, IoRadioOutline } from "react-icons/io5";

const footerSections = [
  {
    title: 'Secciones',
    links: ['Inicio', 'Ultimas noticias', 'Cultura', 'Opinion'],
  },
  {
    title: 'Multimedia',
    links: ['Programas', 'Podcasts', 'Radio en vivo', 'Especiales'],
  },
  {
    title: 'Comunidad',
    links: ['Contacto', 'Newsletter', 'Publicidad', 'Archivo'],
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <FooterContainerStyled>
      <div className="footer-inner">
        <section className="footer-brand" aria-labelledby="footer-brand-title">
          <Link to="/" className="footer-logo" aria-label="Ir al inicio de You Eyes">
            <span aria-hidden="true">
              <GiBoltEye />
            </span>
            <strong id="footer-brand-title">YOU EYES<span>.NET</span></strong>
          </Link>
          <p>
            Diario digital con mirada editorial, cultura, actualidad y transmisiones para seguir conectado durante todo el dia.
          </p>
          <div className="footer-live">
            <IoRadioOutline aria-hidden="true" />
            <span>Radio online activa</span>
          </div>
        </section>

        <nav className="footer-nav" aria-label="Navegacion secundaria">
          {footerSections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <ul>
                {section.links.map((item) => (
                  <li key={item}>
                    <Link to={item === 'Contacto' ? '/contacto' : item === 'Inicio' ? '/' : '/secciones'}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>

        <section className="footer-newsletter" aria-labelledby="newsletter-title">
          <h2 id="newsletter-title">Recibi el resumen diario</h2>
          <p>Una seleccion breve de titulares, cultura y audio para cerrar el dia informado.</p>
          <form onSubmit={handleNewsletter}>
            <label htmlFor="footer-email">Email</label>
            <div>
              <IoMailOutline aria-hidden="true" />
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="youeyes.net@email.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubscribed(false);
                }}
                required
              />
              <button type="submit">Suscribirme</button>
            </div>
          </form>
          {subscribed && <p className="newsletter-status">Listo, te sumamos al resumen diario.</p>}
          <LinksContainerStyled aria-label="Redes sociales">
            <a href="https://facebook.com" aria-label="Facebook">
              <IoLogoFacebook />
            </a>
            <a href="https://wa.me/" aria-label="Whatsapp">
              <IoLogoWhatsapp />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <IoLogoInstagram />
            </a>
          </LinksContainerStyled>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© 2026 YOU EYES.NET. Todos los derechos reservados.</p>
        <ul aria-label="Enlaces legales">
          <li><Link to="/contacto">Terminos</Link></li>
          <li><Link to="/contacto">Privacidad</Link></li>
          <li><Link to="/contacto">Cookies</Link></li>
        </ul>
      </div>
    </FooterContainerStyled>
  );
};

export default Footer;
