import React from 'react'
import { CiEdit, CiTrash  } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
export default function ButtonGroup() {
  return (
  <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
        
    <button
    className="inline-block border-e p-2 text-gray-600/90 hover:bg-gray-50 focus:relative"
    title="Edit Product" > 
    <IoAddOutline   className='w-5 h-5 '/> 
    </button>
  <button
    className="inline-block border-e p-2 text-gray-600(90) hover:bg-gray-50 focus:relative"
    title="Edit Product"
  >
    <CiEdit className='w-5 h-5 '/> 
  </button>

  <button
    className="inline-block border-e p-2 text-gray-600/90 hover:bg-gray-50 focus:relative"
    title="Delete Product"
  >
    <CiTrash className='w-5 h-5 '/> 
  </button>
</span>
  )
}
