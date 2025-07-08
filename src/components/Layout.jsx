import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'


function Layout({children}) {
  return (
    <>
    <div className='bg-gradient-to-br from-background to-muted '>
       <Header/>
       <main className='min-h-screen container mx-auto px-4 py-8'>
        {children}
       </main>
       <Footer/>
    </div>
    </>
  )
}

export default Layout