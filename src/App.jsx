import React from "react"

import {
   Navbar,
   Home,
   About,
   Teacher,
   Contact, 
   
   Footer, 
   Courses
  } from "./components/index"

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses/>
      <Teacher />
      <Contact />
      <Footer />
    </div>
  )
  
}

export default App
