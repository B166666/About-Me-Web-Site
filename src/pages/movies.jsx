
import MovieCard from '../cards/card.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'   
import fightClubImg from '../imgs/fight.jpg'
import MeAndBro from '../imgs/MeAndBro.jpg'
import hunt from '../imgs/hunt.jpg'
import kim from '../imgs/kim.jpg'
import Dither from '../cards/Dither.jsx'
import Showcard from '../cards/cards2.jsx'
import './movies.css'

function Movie(){
    const [search, setSearch] = useState("")
    const navigate = useNavigate();
    const [red, setred] = useState(0.5)
    const [green, setgreen] = useState(0.5)
    const [blue, setblue] = useState(0.5)
    const movies = [
        {id:1, name:"The Hunt (2012)", url:hunt , info:"How i look at bro and his wife after he promised he will marry me and make me his house wife."},
        {id:2, name:"One flew over the cuckoos nest", url:MeAndBro, info:"Chief is literally me. (┬┬﹏┬┬)"},
        {id:3,name:"fight club", url:fightClubImg, info:"HOLY FUCKING SHIT. This here is a masterpiece."},
    ]


    const shows = [
        {id:1, name:"Better Call Saul", url:kim, info:"Better Fuel huell"}
    ]
    
   
    
    return(
        <>
            

            <div className="home1">
                <div className='wave'>
                <Dither
                    waveColor={[red, green, blue]}
                    disableAnimation={false}
                    enableMouseInteraction={true}
                    mouseRadius={0.2}
                    colorNum={40}
                    waveAmplitude={0.50}
                    waveFrequency={3.3}
                    waveSpeed={0.01}
                 />
                </div>
                
                <div className='top-bar-container'>
                        <div className='take-me-home' onClick={()=>navigate('/')} >
                            
                            <span className="material-symbols-outlined search-icon Home-icon">
                                Home
                            </span>
                        
                        </div>
                        

                        <div  className='search-div'>
                            <span className="material-symbols-outlined search-icon">
                                search
                            </span>
                            <input type="text"
                            placeholder="Search"
                            className='input-search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            
                            />

                </div>
                    
                </div>
                <div className="content-wrapper">
                    <div className="movies-column">
                        <h2>Movies</h2>
                        {movies
                            .filter(movie => movie.name.toLowerCase().startsWith(search.toLowerCase()))
                            .map(movie => <MovieCard 
                                key={movie.id} 
                                Movie={movie}
                                
                                />

                                )
                        }
                    </div>
                    <div className="shows-column">
                        <h2>Shows</h2>
                        {shows
                            .filter(show => show.name.toLowerCase().startsWith(search.toLowerCase()))
                            .map(show => <Showcard 

                                 key={show.id}
                                 show={show}
                                 onHover={(id) => {
                                    if( id === 1 ) {
                                        setred(1);
                                        setgreen(0.8);
                                        setblue(0.5);
                                    }
                                 }}

                                 
                                 />
                                )
                        }
                    </div>
                </div>

             
                

                

            </div>
        </>
    )
}

export default Movie;