import React from 'react'
import { Button } from '../Button/ButtonStyled'

const ButtonList = ({categories, activeCategory, filterCategory}) => {
  return (
    
    <div className='categories' aria-label="Filtrar por seccion">
      {categories.map(category =>(
        <Button
          type='button'
          aria-pressed={activeCategory === category}
          onClick={()=>filterCategory(category)}
          key={category}
          >
          {category}
        </Button>
      ))}
    </div>
  )
}

export default ButtonList
