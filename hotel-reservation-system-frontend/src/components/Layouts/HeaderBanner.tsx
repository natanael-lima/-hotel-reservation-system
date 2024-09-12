import React from 'react'

export default function HeaderBanner() {
  return (
    <header className="relative text-black">
      {/* Fondo negro detrás del degradado */}
      <div className="absolute inset-0 bg-black"></div>
      {/* Degradado encima del fondo negro */}
      <div className="relative bg-gradient-to-b from-cyan-500/25 to-cyan-400/25">
          {/* Contenido del header */}
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-8">
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                </div>
          </div>
      </div>
    </header>
  )
}
