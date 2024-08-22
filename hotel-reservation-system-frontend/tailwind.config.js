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
      spacing: {
        '48': '14rem',  // Puedes ajustar este valor a tus necesidades
        '80': '22rem',
      },
      fontSize: {
      '7xl': '7rem', // Añade un nuevo tamaño de fuente
      '8xl': '8rem', // Añade un nuevo tamaño de fuente
      '9xl': '10rem', // Añade un nuevo tamaño de fuente
     
    },},
  },
  plugins: [],
}

