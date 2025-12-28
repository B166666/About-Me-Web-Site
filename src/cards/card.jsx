
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import './card.css'


function MovieCard({Movie, onHover}){
    const Navigate = useNavigate();
    const cardRef = useRef(null);

    useEffect(() => {

        const mycard = cardRef.current
        if(!mycard){return;}
        const go = () => {
            Navigate(`/Movie${Movie.id}`)
            
        }
        mycard.addEventListener('click', go)
        

        return () => {
            mycard.removeEventListener('click', go)
        }


    }, [Movie.id, Navigate])

    

    return(
        <div className="card" ref={cardRef} onMouseEnter={() => onHover(Movie.id)}>
            <div className="card_left">
                <img src={Movie.url} alt={Movie.name} />
            </div>
            <div className="card_right">
                <h1>{Movie.name}</h1>
                <div className="card_right__details">
                    <ul>
                    
                    </ul>
                </div>
                <div className="card_right__review">
                    <p>{Movie.info}</p>
                </div>
            </div>
        </div>
    )


}

export default MovieCard;