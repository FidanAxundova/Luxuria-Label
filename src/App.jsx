import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/thefirstpage/Home'
function App() {
  

  return (
   <>

   <BrowserRouter>
   <Header/>
   <Home />
   


   </BrowserRouter>
   </>
  )
}

export default App
