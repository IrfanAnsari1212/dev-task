import React from 'react'

import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="contsiner">
        <Programs />

      </div>

    </div>
  )
}

export default App
