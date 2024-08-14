import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Header from './component/Header'
import Banner from './component/Banner'
import About from './component/About'
import Services from './component/Services'
import Expertise from './component/Expertise'
import Footer from './component/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/> 
    <Banner></Banner>
     <About/>
     <Services/>
     <Expertise/>
     <Footer/>
    </>
      
      
  )
}

export default App
