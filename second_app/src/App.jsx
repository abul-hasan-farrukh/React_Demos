import Header from "./components/Header.jsx"
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Carousel from "./components/Carousel.jsx"
import ContactUs from "./components/ContactUs.jsx"
import Login from "./components/Login.jsx"
import './css/gallery.css'

function App() {
  return(
    <>
    <Header />
    <Gallery />
    <Carousel/>
    <ContactUs/>
    <Login/>
    <Footer />
    </>
  )
  
  }

export default App 
