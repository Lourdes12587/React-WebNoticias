import React from 'react'
    
export const ArticleList = ({ articles }) => {

    return (
      <section className="page-shell filtered-grid" aria-live="polite">

        {articles.map ((article, index) => (

        <article className="filtered-card" key={article.id} id={`nota-${article.id}`}>
          <img src={article.image} alt="" loading={index < 2 ? 'eager' : 'lazy'} />
          <div>
            <span>{article.seccion}</span>
            <h2>{article.titulo}</h2>
            <p>{article.descripcion}</p>
            <a href={`#nota-${article.id}`}>Leer nota</a>
          </div>
        </article>
        ))}
      </section>
    )
  };
    
export default ArticleList
    
