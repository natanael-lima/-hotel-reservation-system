import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import Hero from '../components/Hero/Hero'
import SliderHotels from '../components/Sliders/SliderRoomWithHotel'
import Publicity from '../components/Publicity/Publicity'
import SliderPlaces from '../components/Sliders/SliderPlaces'
import Search from '../components/Search/Search'

export default function Home() {
  return (
    <div>
      {/* <Announcement /> */}
      <Header />
      <main>
        {/* Sección Hero */}
        <Hero/>
         
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:gap-8 gap-4 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-2">
          <div className="rounded-lg bg-transparent">
          <Search/>
          <SliderHotels/>
          </div>
          <div className="rounded-lg bg-transparent">
          <Publicity/> 
          </div>
          <div className="rounded-lg bg-transparent">
          <SliderPlaces/>
          </div>  
        </div>      
        {/*  Otras secciones */}
      </main>
      <Footer/>
    </div>
  )
}
