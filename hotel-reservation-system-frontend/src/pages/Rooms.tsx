import CardProduct from '../components/CardProduct'
import FiltroV from '../components/FiltroV'
import Header from '../components/Header'
import HeaderBanner from '../components/HeaderBanner'

export default function Product() {
  return (
    <div>
        <Header />
        <HeaderBanner/>
        <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-2'>
        <div className="h-32 rounded-lg bg-gray-200 sticky top-0 ">
            {/* Columna de Filtros */}
            <FiltroV/>
        </div>
        <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2">
           {/* Columna de Productos */}
           <main className="flex-1 p-4 bg-white">
            <section className="container mx-auto py-12 max-w-screen-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
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
        </div>
        </main>
        
    </div>
  )
}
