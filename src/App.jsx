import './App.css'
import Movie from './pages/movies.jsx' 
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home.jsx'
import MovieOne from './movies_and_shows/MovieOne.jsx'
import ShowOne from './movies_and_shows/ShowOne.jsx'

function App() {

  return(
    <main className='main'>
      <Routes>
        <Route path="/" element={<Home/>} /> 

        <Route path='/favorites' element={<Movie/>}/>
        <Route path='/Movie1' element={<MovieOne/>}/>
        <Route path='/Show1' element={<ShowOne/>}/>

      </Routes>
      
    </main>
    
  )

}

export default App
