import React from 'react'
import { ThemeToggle } from './context/theme-toggle.jsx'
import { Link } from 'react-router-dom'
import Citysearch from './city-search'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between h-16">
        
        <div className='flex items-center space-x-1 mr-2'>
            <Link to={"/"}>
            <img 
                className='w-10 h-10 rounded-full object-contain' 
                src={logo} 
                alt="Vayutrack Logo" 
                onError={(e) => {
                    e.target.style.display = 'none';
                }}
            />
            </Link>
          <h1 className="text-xl md:text-2xl font-bold ">Vayutrack</h1>
        </div>


        <div className='flex gap-2 ml-2'>
          <Citysearch/>
          <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header
