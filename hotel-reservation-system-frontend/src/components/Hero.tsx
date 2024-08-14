

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-bold text-orange-500 lg:text-7xl md:text-4xl">
            HOTEL  
          </h1>
          <h1 className="text-3xl font-bold text-orange-600 lg:text-7xl md:text-4xl mt-20">
            FROM 
          </h1>
          <h1 className="text-3xl font-bold text-orange-700 lg:text-7xl md:text-4xl mt-20">
              DREAMS
          </h1>
    
          <p className="hidden text-gray-500 md:mt-10 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
            quisque ut interdum tincidunt duis.
          </p>
    
          <div className="mt-4 md:mt-8">
            <a href="#" className="inline-block rounded-lg bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring focus:ring-yellow-400">
              Book apartaments
            </a>
          </div>
        </div>
      </div>
    
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  )
}
