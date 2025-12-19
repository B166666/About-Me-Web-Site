import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [items, setItems] = useState([]);

 useEffect(() => {
  const interval = setInterval(() => {
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
    }, 5000); // Match the 5s animation duration from Home.css
  }, 500); // Create a new item every 100ms for more items

  return () => clearInterval(interval); 

}, []);

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



    <div style={{ color: 'lightpink', position: 'absolute', zIndex: 10 }}>Hi Im Taikey. :3</div>

    </>

  )
}

export default Home;