import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Componente del menú lateral
function Lateralbar() {
  const { isAuthenticated } = useAuth;

  return (
    <div className="my-3 py-5 px-4 rounded-md bg-gray-700 h-screen w-1/6 hidden sm:block">
      {/* Contenido del menú lateral */}
      <h2>Menú Lateral</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/mysamples">Mis muestras</Link></li>
        {!isAuthenticated ? (
          <>
            {/* Mostrar estos elementos solo si está autenticado */}
            <li><Link to="/add-sample">Agregar muestra</Link></li>
            <li><Link to="/profile">Perfil</Link></li>
          </>
        ) : (
            <>
                {/* Mostrar estos elementos solo si no está autenticado */}
                <li><Link to="/login">Iniciar sesión</Link></li>
                <li><Link to="/register">Registrarse</Link></li>
            </>
        )}
      </ul>
    </div>
  );
}
export default Lateralbar;