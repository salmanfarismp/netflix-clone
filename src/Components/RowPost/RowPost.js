import React,{ useEffect, useState} from 'react'
import {imageUrl,apiKey} from '../../Constants/Constant'
import './RowPost.css'
import YouTube from 'react-youtube'
import axios from '../../axios'
function RowPost(props) {
    
    const [poster, setPoster] = useState([])
    const [trailer, setTrailer] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) =>{
            setPoster(response.data.results)
            console.log(poster)
          })
            
    
      
    },[])
    const opts = {

        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const handleMovie = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response) => {
        console.log(response.data)
        if (response.data.results.length > 0) {
            setTrailer(response.data.results[0])
        }

        })
    }
    
  return (
    <div className="row">
        
        <h2>{props.title}</h2>
        <div className="posters" >
            {
                poster.map((poster) =>{
                    return (
                        <img onClick={()=>handleMovie(poster.id)} key={poster.id} className={props.isSmall?"small_poster":"poster"}  src={`${imageUrl+poster.poster_path}`} alt="" />

                    )
                })


            }

                 
        </div>
        <div style={{width:'100%'}}>
          { trailer && <YouTube  videoId={trailer.key} opts={opts} /> }
        </div>
        
       
        
    </div>
    
  )
}

export default RowPost
