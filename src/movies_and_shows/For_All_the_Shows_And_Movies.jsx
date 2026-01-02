import Dither from '../cards/Dither.jsx';
import './For_All_the_Shows_And_Movies.css'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';




function ForAll({ r, b, g, mouseRadius, colorNum, waveAmplitude, waveFrequency, waveSpeed, id }) {
    return(

        <div className="cover">
            <div className='cover2'>
            <Dither
                waveColor={[r, b, g]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={mouseRadius}
                colorNum={colorNum}
                waveAmplitude={waveAmplitude}
                waveFrequency={waveFrequency}
                waveSpeed={waveSpeed}
            /> </div>
            <div className='kim' style={{width: '900px', height:'900px', padding:'20px', margin:'auto', zIndex:'34', position:'relative', top:'200px'}}>
                <LiteYouTubeEmbed
                    id={id}
                    
                />
            </div>
            
        </div>
    )
}

export default ForAll;