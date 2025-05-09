import "./index.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Título animado */}
      <h1 className="text-5xl font-bold text-blue-600 animate-bounce">
        ¡Tailwind CSS v4 Funciona!
      </h1>

      {/* Contenedor con sombras y bordes redondeados */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg w-96 text-center">
        <p className="text-lg text-gray-700">
          Si ves este contenido correctamente, Tailwind CSS v4 está funcionando.
        </p>
        
        {/* Botón con efectos de hover */}
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300">
          ¡Prueba Tailwind v4!
        </button>
      </div>
    </div>
  );
}

export default App;