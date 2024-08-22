import React from 'react'
interface ButtonProps {
    content: string;
    className: string;
  }
export default function ButtonSecondary({ content,className }: ButtonProps) {
  return (
    <a className={`block rounded-lg bg-orange-200 px-5 py-2.5 text-sm font-medium text-orange-600 transition hover:text-orange-500 ${className} `} href="#">
    {content}
    </a>
  )
}
