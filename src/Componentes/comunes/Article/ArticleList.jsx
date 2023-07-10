import React from 'react'
import { CardMedia} from "@mui/material";
    
export const ArticleList = ({ articles }) => {

    return (
      <div style={{ margin: '30px', width: '100%', border:'2px solid block', display: 'flex',
        justifyContent: 'center', flexWrap:'wrap',
        alignItems: 'center',gap:'30px'}}>

        {articles.map ( article => (

        <div style={{width:"600px", boxShadow:"4px 4px 10px silver"}}>
          <h2 style={{margin:'10px'}}>{article.titulo}</h2>
            <div className="d-flex justify-content-center align-items-center">
              <CardMedia
                  content='img'
                  image={article.image}
                  sx={{ height: 320 }}
                  />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quasi totam ut earum quae atque iste iure molestias sequi nihil, praesentium eveniet alias facere, nemo, voluptate hic officia? Repudiandae, voluptatibus.</p>
            </div>
        </div>
        ))}
      </div>
    )
  };
    
export default ArticleList
    