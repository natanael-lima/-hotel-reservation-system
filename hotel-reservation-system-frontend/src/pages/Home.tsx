import Header from '../components/Header'

import Footer from '../components/Footer'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div>
      <Header />
      <main className='top-30'>
        {/* Sección Hero */}
        <Hero/>
        {/* Otras secciones */}
      </main>
      <Footer/>
    </div>
  )
}
