
export default function FiltroV() {
  return (
    <aside className="sticky top-0 w-full md:w-1/4 p-6 bg-white shadow-lg rounded-lg h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Filtrar por</h2>

      <form className="space-y-8">
        {/* Filtros que ya has usado */}
        <div className="mb-8 text-gray-400">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Filtros que ya has usado</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <input
                type="checkbox"
                id="casas-chalets"
                className="mr-2"
              />
              <label htmlFor="casas-chalets" className="flex-1 text-gray-700">Casas y chalets</label>
              <span className="text-gray-500">1</span>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                id="habitaciones-casas"
                className="mr-2"
              />
              <label htmlFor="habitaciones-casas" className="flex-1 text-gray-700">Habitaciones en casas particulares</label>
              <span className="text-gray-500">11</span>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                id="apartamentos"
                className="mr-2"
              />
              <label htmlFor="apartamentos" className="flex-1 text-gray-700">Apartamentos</label>
              <span className="text-gray-500">418</span>
            </li>
          </ul>
        </div>

        {/* Rango de Presupuesto */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Tu presupuesto (por noche)</h3>
          <div className="flex items-center">
            <input
              type="number"
              placeholder="$ 20.000"
              className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="mx-2 text-gray-500">-</span>
            <input
              type="number"
              placeholder="$ 300.000+"
              className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Filtros Populares */}
        <div className="mb-8 text-gray-400">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Filtros populares para esta zona</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <input
                type="checkbox"
                id="hoteles"
                className="mr-2"
              />
              <label htmlFor="hoteles" className="flex-1 text-gray-700">Hoteles</label>
              <span className="text-gray-500">347</span>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                id="fantastico"
                className="mr-2"
              />
              <label htmlFor="fantastico" className="flex-1 text-gray-700">Fantástico: 9 o más</label>
              <span className="text-gray-500">143</span>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                id="comentarios"
                className="mr-2"
              />
              <label htmlFor="comentarios" className="flex-1 text-gray-700">Según los comentarios de los clientes</label>
              <span className="text-gray-500">479</span>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                id="wifi"
                className="mr-2"
              />
              <label htmlFor="wifi" className="flex-1 text-gray-700">WiFi gratis</label>
              <span className="text-gray-500">1010</span>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                id="reservas-tarjeta"
                className="mr-2"
              />
              <label htmlFor="reservas-tarjeta" className="flex-1 text-gray-700">Reservas sin tarjeta de crédito</label>
              <span className="text-gray-500">1</span>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                id="parking"
                className="mr-2"
              />
              <label htmlFor="parking" className="flex-1 text-gray-700">Parking</label>
              <span className="text-gray-500">410</span>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                id="3-estrellas"
                className="mr-2"
              />
              <label htmlFor="3-estrellas" className="flex-1 text-gray-700">3 estrellas</label>
              <span className="text-gray-500">455</span>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                id="bano-privado"
                className="mr-2"
              />
              <label htmlFor="bano-privado" className="flex-1 text-gray-700">Baño privado</label>
              <span className="text-gray-500">881</span>
            </li>
          </ul>
        </div>

        {/* Botón de Aplicar Filtros */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Aplicar Filtros
          </button>
        </div>
      </form>
    </aside>
  )
}
