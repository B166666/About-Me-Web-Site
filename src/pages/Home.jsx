import { useEffect, useState } from "react";
import "./Home.css";
import TextType from './TextType';
import PixelTrail from './PixelTrail';



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
     
      setfate("dont you find it scary of the idea that we dont have any control over any of our decisions? fate really just means that we dont have any control over our lives and i dont think that true. you are here because you choose to be here.")
    } else if (x === 2){

      let fateElement = document.getElementById("fate");
      fateElement.style.color = "rgb(149, 1, 104)"
      let element = document.getElementsByClassName("no");
      element[0].style.visibility = "hidden";
     
      element = document.getElementsByClassName("yes");
      element[0].style.visibility = "hidden";
      
      setfate("yes thats the right answer. fate is not real. and it will never be real. our decisions are not caused by some complix universal mathmatical equations, that mite be the case for some peaople but not for those with a true soul.")
    }

  }, [x]);

  return (
    <>
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
        text={["Hi Im Taikey. :3 "]}
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
        text={fate}
        typingSpeed={100}
        pauseDuration={3000}
        showCursor={true}
        cursorCharacter="|"
      />


      </div>
  
    </div>

  <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>  
  <PixelTrail
    gridSize={100}
    trailSize={0.08}
    maxAge={100}
    interpolate={0}
    color="#ff2990"
    gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
   />
  </div>
    
    </>

  )
}

export default Home;