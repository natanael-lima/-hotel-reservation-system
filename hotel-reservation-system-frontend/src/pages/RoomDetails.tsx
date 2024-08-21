import React from 'react'
import Header from '../components/Header'
import HeaderBanner from '../components/HeaderBanner'
import RoomDetailComponent from '../components/RoomDetailComponent'

export default function RoomDetails() {
  return (
    <div>
    <Header />
        <HeaderBanner/>
        <main className='flex'>
            <RoomDetailComponent/>
        </main>

    </div>
  )
}
