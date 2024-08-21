import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SliderHotels from '../components/SliderHotels'
import Publicity from '../components/Publicity'



export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* Sección Hero */}
        <Hero/> 
        <SliderHotels/>
        <section className='p-10 bg-white'>
          <Publicity/> 
        </section>
               
        {/*  Otras secciones */}
      </main>
      <Footer/>
    </div>
  )
}
