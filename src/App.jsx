import { useState } from 'react'

import './css/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Headers from './components/Headers';

function App() {
  
  return (
    <>
    <Header/>
    {/* <Headers/> */}
     <div className='flex justify-center items-center h-screen'>
      <h1 className="text-3xl font-bold text-black">
        Hello world!
      </h1>
      </div>

      <Footer/>
    </>
  )
}

export default App
