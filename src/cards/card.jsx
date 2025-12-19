
import './card.css'


function MovieCard({Movie}){

    return(
        <div className="card">
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