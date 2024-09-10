import React from 'react'
interface ButtonProps {
    content: string;
    className: string;
    onClick: () => void; // onClick es una función que no recibe parámetros y retorna void
  }
export default function ButtonSecondary({ content,onClick,className }: ButtonProps) {
  return (
    <a onClick={onClick} className={`block rounded-lg bg-orange-200 px-5 py-2.5 text-sm font-medium text-orange-600 transition hover:text-orange-500 ${className} `} href="#">
    {content}
    </a>
  )
}
