import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/thefirstpage/Home'
import Footer from './components/Footer'
import Dolcegabbana from './pages/dolce&gabbana/Dolcegabbana'
import Hermes from './pages/hermes/Hermes'
import Gucci from './pages/gucci/Gucci'
import Prada from './pages/prada/Prada'
import Versace from './pages/versace/Versace'
function App() {
  

  return (
   <>

   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/dolce&gabbana' element={<Dolcegabbana />} />
   <Route path='/hermes' element={<Hermes />} />
   <Route path='/gucci' element={<Gucci />} />
   <Route path='/prada' element={<Prada />} />
   <Route path='/versace' element={<Versace />} />
   </Routes>


  

   <Footer />
   
   </BrowserRouter>
   </>
  )
}

export default App
