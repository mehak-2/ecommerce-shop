import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

// layout is used for when we go to different pages then only navbar and footer will display same adn the center content will change i.e children
function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <div className="content">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout