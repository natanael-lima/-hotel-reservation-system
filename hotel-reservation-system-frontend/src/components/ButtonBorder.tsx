// Define la interfaz para los props del componente
interface ButtonBorderProps {
    content: string;
  }

export default function ButtonBorder({ content }: ButtonBorderProps) {
  return (
    <a href="#" className="shrink-0 rounded-md border border-orange-600 bg-orange-600 px-16 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring focus:ring-orange-400 active:text-orange-800">
     {content}
    </a>
  )
}
