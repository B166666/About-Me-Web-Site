import Dither from '../cards/Dither.jsx';
import './sclip.css'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';




function Show1(){
    return(

        <div className="cover">
            <div className='cover2'>
            <Dither
                waveColor={[1, 0.8, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.2}
                colorNum={40}
                waveAmplitude={0.50}
                waveFrequency={3.3}
                waveSpeed={0.02}
            /> </div>
            <div className='kim' style={{width: '700px', height:'700px', padding:'20px', margin:'auto', zIndex:'34', position:'relative', top:'200px'}}>
                <LiteYouTubeEmbed
                    id="emSx30gESYw"
                    title="Better Call Saul | Official Trailer | Netflix"
                />
            </div>
            
        </div>
    )
}

export default Show1;