import React from 'react'
import AboutUs from '../components/AboutUs'
import Header from '../components/Header'
import HeaderBanner from '../components/HeaderBanner'

export default function About() {
  return (
    <div>
        <Header />
        <HeaderBanner/>
        <main className='flex'>
            <AboutUs />
        </main>
        
    </div>
    
  )
}
