
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import './card.css'


function Showcard({show, onHover}) {
    const Navigate = useNavigate();
    const cardRef = useRef(null);
   
    useEffect(() => {

        const mycard = cardRef.current
        if(!mycard) return
        const go = () => {
            Navigate(`/Show${show.id}`)
        }
        mycard.addEventListener('click',  go)
        return () => {
            mycard.removeEventListener('click', go)
        }


    }, [show.id, Navigate])

    

    return(
        <div className="card" ref={cardRef} onMouseEnter={() => {onHover(show.id)}}>
            <div className="card_left">
                <img src={show.url} alt={show.name} />
            </div>
            <div className="card_right">
                <h1>{show.name}</h1>
                <div className="card_right__details">
                    <ul>
                    
                    </ul>
                </div>
                <div className="card_right__review">
                    <p>{show.info}</p>
                </div>
            </div>
        </div>
    )


}

export default Showcard;