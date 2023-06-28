import React, { useState } from 'react'
import ArticleList from '../Filtros/ArticleList';
import ButtonList from '../Filtros/ButtonList';
import { noticias } from '../../../data/NoticiasData';
import { Container } from './FiltrosStyled'

const Filtros = () => {

  const allSecciones = ['TODAS',...new Set(noticias.map(secciones => secciones.seccion))]

  const [ categories, setCategories ] = useState(allSecciones);

  const [ articles, setArticles ] = useState(noticias);

  const filterCategory = (seccion) =>{
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
          <ButtonList categories={categories} filterCategory={filterCategory}/>
          <ArticleList articles ={articles}/>
        </Container>
        
    </>
  )
}

export default Filtros