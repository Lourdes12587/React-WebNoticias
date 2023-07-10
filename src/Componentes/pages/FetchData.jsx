import React, { useEffect, useState } from 'react'
import axios from "axios"


const FetchData = () => {

    const [Data, setData] = useState("");
    
    const fetchData = async ()=> {
        await axios
        .get (
            "https://newsapi.org/v2/top-headlines?country=in&apikey=fefcba94b42647ba8f8ed4e8d92643b3"
        )
        .then (res => setData(res.data.articles));
    };

    useEffect (() => {
        fetchData();
    }, []);

  return (
    <div className="container my-4">

        <h2 style={{display: 'flex', justifyContent: 'center', margin:'30px'}}>
        </h2>
        <div style={{ width: '100%', border:'2px solid block', display: 'flex',
            justifyContent: 'center', flexWrap:'wrap',
            alignItems: 'center', gap:'30px'}}>

            {Data
                ? Data.map ((items, index)=>(
                <>
                    <div style={{width:"600px", boxShadow:"4px 4px 10px silver"}}>
                        <h2 style={{margin:'10px'}}>{items.title}</h2>
                    
                        <div>
                            <img src={items.urlToImage} alt="/"
                            style={{width:"100%", height:"300px", objectFit:"cover"}}
                            />
                            <p>{items.content}</p>
                            <a href={items.url} target="blank"> LEER MAS</a>
                        </div>

                    </div>
                </>
            ))
        : "LOADING...."}
        </div>  
    </div>   
  );
};

export default FetchData
