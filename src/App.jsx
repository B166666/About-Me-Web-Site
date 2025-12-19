import './App.css'
import Movie from './pages/movies.jsx' 
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home.jsx'


function App() {

  return(
    <main className='main'>
      <Routes>
        <Route path="/" element={<Home/>} /> 

        <Route path='Favorites' element={<Movie/>}/>

      </Routes>
      
    </main>
    
  )

}

export default App
