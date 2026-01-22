import { useEffect, useState } from "react";
import "./Home.css";
import TextType from './TextType';
import Antigravity from './Antigravity';





function Home() {
  const [items, setItems] = useState([]);
  const [isPageVisible, setIsPageVisible] = useState(!document.hidden);
  const [x, setx] = useState(0);
  const [fate, setfate] = useState("");
  



  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);



  useEffect(() => {
    let interval;
    if (isPageVisible) {
      interval = setInterval(() => {
        const id = Date.now();
        setItems(prev => [
          ...prev,
          {
            id,
            left: Math.random() * 95 // Use vw units and a buffer
          }
        ]);

        setTimeout(() => {
          setItems(prev => prev.filter(item => item.id !== id));
        }, 70600); // Match the 6s animation duration from Home.css (stupid idea)
      }, 500); // Create a new item every 500ms
    }

    return () => clearInterval(interval);
  }, [isPageVisible]);

  useEffect(() => {
    if (x === 1) {
      let fateElement = document.getElementById("fate");
      fateElement.style.color = "hsl(0, 79%, 72%)"
      let element = document.getElementsByClassName("no");
      element[0].style.visibility = "hidden";
     
      element = document.getElementsByClassName("yes");
      element[0].style.visibility = "hidden";
     
      setfate("complix universal mathmatical equations, that mite be the case for some peaople but not for those with a true soul.")
    } else if (x === 2){

      let fateElement = document.getElementById("fate");
      fateElement.style.color = "rgb(149, 1, 104)"
      let element = document.getElementsByClassName("no");
      element[0].style.visibility = "hidden";
     
      element = document.getElementsByClassName("yes");
      element[0].style.visibility = "hidden";
      
      setfate("complix universal mathmatical equations, that mite be the case for some people but not for those with a true soul.")
    }

  }, [x]);

  return (
    <>
   <a href="/favorites"><div className="moviesAndShows">My Favorites Movies<div className="twoo">and Shows</div></div></a>

    <div className="home-page">
        <div className="Home-container">
          {items.map(item => (
            <div
              key={item.id}
              className="falling"
              style={{ left: `${item.left}vw` }}
            >
              .
            </div>
          ))}
        </div>

        <div style={{ color: 'lightpink', position: 'absolute', zIndex: 10, fontFamily: 'Bradley Hand, cursive' }}>
          <TextType 
            text={["Hi Im Taikey. "]}
            typingSpeed={100}
            pauseDuration={3000}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <div className="box1">
          <div className="inside">do you believe in fate?</div>
          <div className="yes" onClick={() => {setx(2)}}>Yes</div>
          <div className="no" onClick={() => {setx(1)}}>No</div>
            <div id="fate" style={{position: 'absolute', top: '70px', left: '0px', color: 'lightpink', fontFamily: 'Bradley Hand, cursive', fontSize: '0.8em' }}>
            <TextType 
            text={[fate]}
            typingSpeed={100}
            pauseDuration={3000}
            showCursor={true}
            cursorCharacter="|"
          />


          </div>
          
      
        </div>



          <div style={{ width: '100%', height: '780px', position: 'relative' }}>
            <Antigravity
              count={300}
              magnetRadius={5}
              ringRadius={9}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={0.7}
              lerpSpeed={0.05}
              color={'rgba(103, 31, 108, 1)'}
              autoAnimate={true}
              particleVariance={1}
            />
          </div>


    </div>
    </>

  )
}

export default Home;