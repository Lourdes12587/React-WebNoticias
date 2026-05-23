import React, { useMemo, useState } from 'react';
import { FaBroadcastTower, FaPause, FaPlay, FaRegBookmark } from 'react-icons/fa';
import { noticias } from '../../data/NoticiasData';

const getMeta = (article, index) => ({
  author: article.autor || 'Redaccion You Eyes',
  date: article.fecha || `23 MAY 2026`,
  readingTime: article.lectura || `${Math.max(2, Math.ceil(article.titulo.length / 34))} min`,
  type: article.tipo || (index % 4 === 0 ? 'Analisis' : 'Actualidad'),
});

const ArticleCard = ({ article, index, variant = 'standard' }) => {
  const meta = getMeta(article, index);

  return (
    <article className={`news-card news-card--${variant}`}>
      <a href={`#nota-${article.id}`} className="news-card__media" aria-label={`Leer: ${article.titulo}`}>
        <img src={article.image} alt="" loading={variant === 'hero' ? 'eager' : 'lazy'} />
        {variant === 'media' && (
          <span className="media-badge">
            <FaPlay aria-hidden="true" /> Video
          </span>
        )}
      </a>
      <div className="news-card__body">
        <div className="article-meta">
          <span>{article.seccion}</span>
          <span>{meta.readingTime}</span>
        </div>
        <h2>{article.titulo}</h2>
        {variant !== 'compact' && <p>{article.descripcion}</p>}
        <footer>
          <span>{meta.author}</span>
          <time>{meta.date}</time>
        </footer>
      </div>
    </article>
  );
};

const FetchData = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const sections = useMemo(() => {
    const [featured, ...rest] = noticias;
    return {
      featured,
      leftColumn: rest.slice(0, 2),
      rightColumn: rest.slice(2, 5),
      latest: rest.slice(5, 11),
      multimedia: rest.slice(11, 14),
    };
  }, []);

  return (
    <main className="site-main">
      <section className="breaking-strip" aria-label="Resumen informativo">
        <div className="page-shell breaking-strip__inner">
          <strong>En vivo</strong>
          <span>Actualidad, cultura, tecnologia y mirada editorial independiente.</span>
        </div>
      </section>

      <section className="page-shell editorial-hero" aria-labelledby="hero-title">
        <div className="editorial-column editorial-column--left">
          {sections.leftColumn.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index + 1} variant="compact" />
          ))}
        </div>

        <article className="hero-story" id={`nota-${sections.featured.id}`}>
          <a href={`#nota-${sections.featured.id}`} className="hero-story__image" aria-label={`Leer: ${sections.featured.titulo}`}>
            <img src={sections.featured.image} alt="" />
          </a>
          <div className="article-meta">
            <span>{sections.featured.seccion}</span>
            <span>Portada</span>
          </div>
          <h1 id="hero-title">{sections.featured.titulo}</h1>
          <p>{sections.featured.descripcion}</p>
          <div className="hero-story__actions">
            <a className="primary-link" href="#ultimas">Leer ultimas noticias</a>
            <button type="button" className="icon-action" aria-label="Guardar noticia">
              <FaRegBookmark aria-hidden="true" />
            </button>
          </div>
        </article>

        <aside className="editorial-column editorial-column--right" aria-label="Noticias complementarias">
          {sections.rightColumn.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index + 3} variant={index === 0 ? 'media' : 'compact'} />
          ))}
        </aside>
      </section>

      <section className="page-shell content-band" id="ultimas" aria-labelledby="latest-title">
        <div className="section-heading">
          <span>Agenda editorial</span>
          <h2 id="latest-title">Ultimas historias</h2>
        </div>
        <div className="latest-grid">
          {sections.latest.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index + 6} />
          ))}
        </div>
      </section>

      <section className="page-shell ad-banner" aria-label="Publicidad">
        <span>Espacio publicitario</span>
        <strong>Tu marca en portada</strong>
        <small>Formato horizontal premium integrado al flujo editorial.</small>
      </section>

      <section className="page-shell content-band media-section" aria-labelledby="media-title">
        <div className="section-heading">
          <span>Audio y video</span>
          <h2 id="media-title">Multimedia destacado</h2>
        </div>
        <div className="media-grid">
          {sections.multimedia.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index + 12} variant="media" />
          ))}
        </div>
      </section>

      <aside className="radio-player" aria-label="Reproductor de radio en vivo">
        <div className="radio-player__program">
          <FaBroadcastTower aria-hidden="true" />
          <div>
            <span>Radio You Eyes</span>
            <strong>Magazine de tarde</strong>
          </div>
        </div>
        <button
          type="button"
          className="play-button"
          onClick={() => setIsPlaying((current) => !current)}
          aria-label={isPlaying ? 'Pausar radio' : 'Reproducir radio'}
        >
          {isPlaying ? <FaPause aria-hidden="true" /> : <FaPlay aria-hidden="true" />}
        </button>
        <div className="radio-player__timeline" aria-hidden="true">
          <span style={{ width: isPlaying ? '64%' : '28%' }} />
        </div>
        <a href="#media-title">Ver emisiones</a>
      </aside>
    </main>
  );
};

export default FetchData;
