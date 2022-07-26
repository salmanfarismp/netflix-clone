import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {apiKey,imageUrl} from '../../Constants/Constant'

function Banner() {
  let random = Math.floor(Math.random() * 21);
  const [movie, setMovie] = useState('')
  useEffect(() => {
    
  axios.get(`/trending/all/week?api_key=${apiKey}&language=en-US`).then((response) =>{
    console.log(response.data.results[0])
    setMovie(response.data.results[random])
  })
    
  },[])
  
  
  return (
  
    <div style={{backgroundImage:`url(${ movie? imageUrl+movie.backdrop_path : ''})`}} className="banner">
      <div className="content">
          <h1 className="title">{movie.title}</h1>
          <div className="banner_buttons">
              <button className="button">Play</button>
              <button className="button">Mylist</button>
          </div>
          <h3 className="description">{movie? movie.overview :''}
            </h3>
      </div>
      <div className="fade-bottom">
          
      </div>
    </div>

  )
}

export default Banner

