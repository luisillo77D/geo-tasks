import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Componente del menú lateral
function Lateralbar() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="pt-10 bg-zinc-700 w-1/6 hidden sm:block ">
      <div className='grid gap-5 text-center'>
        <Link className='py-3 bg-zinc-800 rounded-md' to="/">Inicio</Link>
        {isAuthenticated ? (
          <>
            {/* Mostrar estos elementos solo si está autenticado */}
            <Link className='py-3 bg-zinc-800 rounded-md' to="/add-sample">Agregar muestra</Link>
            <Link className='py-3 bg-zinc-800 rounded-md' to="/mysamples">Mis muestras</Link>
            <Link className='py-3 bg-zinc-800 rounded-md' to="/profile">Perfil</Link>
          </>
        ) : (
          <>
            {/* Mostrar estos elementos solo si no está autenticado */}
            <Link className='py-3 bg-zinc-800 rounded-md' to="/login">Iniciar sesión</Link>
            <Link className='py-3 bg-zinc-800 rounded-md' to="/register">Registrarse</Link>
          </>
        )}
      </div>
    </div>
  );
}
export default Lateralbar;