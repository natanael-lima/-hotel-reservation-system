import Button from "./Button";
import Search from "./Search";

export default function Hero() {
  return (
      <section
        className="overflow-hidden bg-[url(https://www.onvacation.com/portals/1080/img/about-us/mision.png)] bg-cover bg-top bg-no-repeat">
          <Search/>
        <div className="bg-black/70 p-8 md:p-12 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-6xl font-bold text-orange-500 lg:text-7xl md:text-4xl mt-10 lg:mt-16">
              HOTEL  
            </h1>
            <h1 className="text-6xl font-bold text-orange-600 lg:text-7xl md:text-4xl mt-2 lg:mt-16">
              FROM 
            </h1>
            <h1 className="text-6xl font-bold text-orange-700 lg:text-7xl md:text-4xl mt-2 lg:mt-16">
                DREAMS
            </h1>
            <p className="hidden text-gray-300 md:mt-10 md:block">
            Elegí entre más de 5.000 alojamientos... Y pagalos en cuotas sin interés!
            </p>
      
            <div className="mt-4 md:mt-8">
              <Button content="Explore Hotels" className="px-12 py-3"/>
            </div>
          </div>
        </div>
      </section>
  )
}
