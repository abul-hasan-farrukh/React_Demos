import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx'
import ContactUs from './components/ContactUs.jsx'
import Feedback from './components/Feedback.jsx'
import Login from './components/Login.jsx'
import Registration from './components/Registration.jsx'


function PathMapper() {
  return (
    <>
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<App/>}>  </Route>
        <Route path='/about' element={<AboutUs/>}>  </Route>
        <Route path='/contact' element={<ContactUs/>}>  </Route>
        <Route path='/feedback' element={<Feedback/>}>  </Route>
        <Route path='/login' element={<Login/>}>  </Route>
        <Route path='/registration' element={<Registration/>}>  </Route>


    </Routes>
    
    </BrowserRouter>
    </>

  
  )
}

export default PathMapper