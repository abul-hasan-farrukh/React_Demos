import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx'
import ContactUs from './components/ContactUs.jsx'

function PathMapper() {
  return (
    <>
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<App/>}>  </Route>
        <Route path='/about' element={<AboutUs/>}>  </Route>
        <Route path='/contact' element={<ContactUs/>}>  </Route>


    </Routes>
    
    </BrowserRouter>
    </>

  
  )
}

export default PathMapper