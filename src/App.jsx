import './App.css'
import Movie from './pages/movies.jsx' 
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home.jsx'
import Show1 from './movies_and_shows/sclip1.jsx'


function App() {

  return(
    <main className='main'>
      <Routes>
        <Route path="/" element={<Home/>} /> 

        <Route path='/favorites' element={<Movie/>}/>
        <Route path='/sclip1' element={<Show1/>}/>

      </Routes>
      
    </main>
    
  )

}

export default App
