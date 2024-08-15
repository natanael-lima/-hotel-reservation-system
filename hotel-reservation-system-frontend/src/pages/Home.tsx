import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SliderHotels from '../components/SliderHotels'



export default function Home() {
  return (
    <div>
      <Header />
      <main className='top-30'>
        {/* Sección Hero */}
        <Hero/> 
        <SliderHotels/>        
        {/*  Otras secciones */}
      </main>
      <Footer/>
    </div>
  )
}
