import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SliderHotels from '../components/SliderHotels'
import Publicity from '../components/Publicity'
import SliderPlace from '../components/SliderPlace'



export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* Sección Hero */}
        <Hero/> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:gap-8 gap-4 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-2">
          <div className="rounded-lg bg-rose-100">
          <SliderHotels/>
          </div>
          <div className="rounded-lg bg-gray-50">
          <Publicity/> 
          </div>
          <div className="rounded-lg bg-rose-100">
          <SliderPlace/>
          </div>
          
        </div>
       
       
               
        {/*  Otras secciones */}
      </main>
      <Footer/>
    </div>
  )
}
