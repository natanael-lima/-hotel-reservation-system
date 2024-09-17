import React from 'react'
import { CiEdit, CiTrash  } from "react-icons/ci";


interface ButtonProps {
  onClick2: () => void; // onClick es una función que no recibe parámetros y retorna void
  onClick3: () => void; // onClick es una función que no recibe parámetros y retorna void
}


export default function ButtonGroup({onClick2,onClick3 }: ButtonProps) {
  return (
  <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
  <button
    className="inline-block border-e p-2 text-gray-600(90) hover:bg-gray-50 focus:relative"
    title="Edit Product"
  >
    <CiEdit className='w-5 h-5 ' onClick={onClick2}/> 
  </button>

  <button
    className="inline-block border-e p-2 text-gray-600/90 hover:bg-gray-50 focus:relative"
    title="Delete Product"
  >
    <CiTrash className='w-5 h-5 ' onClick={onClick3}/> 
  </button>
</span>
  )
}
