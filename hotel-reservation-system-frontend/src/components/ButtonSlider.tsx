import React from 'react'
interface ButtonSliderProps {
    icon: React.ReactNode; // El ícono SVG pasado como prop
    onClick: () => void; // Función para manejar el clic del botón
    className?: string; // Añadir esta línea para aceptar 'className'
  }
export default function ButtonSlider({ icon, onClick,className  }: ButtonSliderProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100 focus:outline-none ${className}`}
    >
      {icon}
    </button>
  )
}
