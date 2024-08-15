import React from 'react'
import CardProduct from '../components/CardProduct'
import FiltroV from '../components/FiltroV'
import Header from '../components/Header'

export default function Product() {
  return (
    <div>
        <Header />
        <main className='flex'>
            {/* Columna de Filtros */}
            <FiltroV/>
            {/* Columna de Productos */}
            <main className="flex-1 p-4 bg-gray-200">
            <section className="container mx-auto py-12 max-w-screen-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                </div>
            </section>
            </main>
        </main>
        
    </div>
  )
}
