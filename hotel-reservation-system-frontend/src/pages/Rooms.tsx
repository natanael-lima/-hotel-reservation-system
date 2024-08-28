import CardRoom from '../components/CardRoom'
import SideBarFilter from '../components/SideBarFilter'
import Header from '../components/Header'
import HeaderBanner from '../components/HeaderBanner'

export default function Product() {
  return (
    <div>
        <Header />
        <HeaderBanner/>

        <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-2'>
          {/* Columna de Filtros */}
          <aside className="sticky top-0 w-full md:w-1/1 p-6 bg-white shadow-sm h-screen overflow-y-auto rounded-lg">
              {/* Aquí va tu contenido del sidebar */}
              <SideBarFilter/>
          </aside>
          {/* Columna de Rooms */}
          <div className="h rounded-lg bg-white shadow-sm  lg:col-span-2">
            <main className="flex-1 p-4 ">
                <section className="container mx-auto max-w-screen-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
                  <CardRoom />
                  <CardRoom />
                  <CardRoom />
                  <CardRoom />
                  <CardRoom />
                  <CardRoom />
                  <CardRoom />
                  <CardRoom />
                  </div>
                </section>
              </main>
          </div>
        </main>
    </div>
  )
}
