import React, { useState } from 'react'
import ArticleList from '../Article/ArticleList';
import ButtonList from '../Button/ButtonList';
import { noticias } from '../../../data/NoticiasData';
import { Container } from '../Filtros/FiltrosStyled'

const Filtros = () => {

  const allSecciones = ['TODAS',...new Set(noticias.map(secciones => secciones.seccion))]

  const [ categories ] = useState(allSecciones);
  const [ activeCategory, setActiveCategory ] = useState('TODAS');

  const [ articles, setArticles ] = useState(noticias);

  const filterCategory = (seccion) =>{
    setActiveCategory(seccion);
    if (seccion === 'TODAS'){
      setArticles(noticias)
      return
    }
    const filterData = noticias.filter (article =>article.seccion === seccion);
    setArticles(filterData)
  }

  return (
    <>
        <Container>
          <section className="page-shell section-page">
            <div className="section-heading">
              <span>Archivo editorial</span>
              <h1>Secciones</h1>
              <p>Explora la cobertura por temas y encuentra rapido las historias que queres seguir.</p>
            </div>
          </section>
          <ButtonList categories={categories} activeCategory={activeCategory} filterCategory={filterCategory}/>
          <ArticleList articles ={articles}/>
        </Container>
        
    </>
  )
}

export default Filtros
