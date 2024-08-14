/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que Tailwind esté buscando archivos en el directorio correcto
  ],
  theme: {
    extend: {
      colors: {
        't-primary': '#F7D6CD', // Nuevo color de fondo
        'b-primary': '#F7D6CD', // Ejemplo de nuevo color de texto
      },
      fontSize: {
      '7xl': '8rem', // Añade un nuevo tamaño de fuente
      '8xl': '9rem', // Añade un nuevo tamaño de fuente
      '9xl': '10rem', // Añade un nuevo tamaño de fuente
     
    },},
  },
  plugins: [],
}

