import './index.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Biography from './components/Biography'
import Picture from './components/Picture'
import Gallery from './components/Gallery'
import Main from './components/Main'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/biography" element={<Biography/>}/>
          <Route path="/picture" element={<Picture/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
      </Routes>  
    </BrowserRouter>
    </>
  )
}

export default App;