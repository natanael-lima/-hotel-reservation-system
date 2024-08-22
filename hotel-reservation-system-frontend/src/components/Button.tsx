interface ButtonProps {
    content: string;
    className: string;
  }

export default function Button({ content, className }: ButtonProps) {
  return (
    <a className={`inline-block rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-400 ${className}`} href="#">
       {content}
    </a>
  )
}
