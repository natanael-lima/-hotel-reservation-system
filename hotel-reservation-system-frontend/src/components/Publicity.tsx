import React from 'react'

export default function Publicity() {
  return (
    <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 ">
    <img
      alt=""
      src="https://media.admagazine.com/photos/65b927c4727a9ac268def3e8/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg"
      className="h-32 w-full object-cover md:h-full"
    />
  
    <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-black">Promociones, descuentos y ofertas especiales para ti</p>
  
      <h2 className="mt-6 font-black uppercase">
        <span className="text-4xl font-black sm:text-5xl lg:text-6xl text-black"> Aprovecha el momento </span>
  
        <span className="mt-2 block text-sm text-black">Ahorra un 15% o más si reservas y te alojas antes del 01/10/2024</span>
      </h2>
  
      <a
        className="rounded-lg mt-8 inline-block w-full bg-orange-600 hover:bg-orange-700 py-4 text-sm font-bold uppercase tracking-widest text-white"
        href="#"
      >
        Encuentra Ofertas
      </a>
  
      <p className="mt-8 text-xs font-medium uppercase text-gray-400">
        Offer valid until 24th March, 2021 *
      </p>
    </div>
  </section>
  )
}
