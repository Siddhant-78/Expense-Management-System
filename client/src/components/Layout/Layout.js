import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="bg-gray-900 text-white flex-grow">
          {children}
        </div>
        <Footer />
      </div>

    </>
  )
}

export default Layout
