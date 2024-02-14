import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className=" bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-md">
      <Link to={
        isAuthenticated ? "/mysamples" : "/"
      }>
        <h1 className=" text-2xl font-bold"> Muestras Laboratorio</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>Bienvenido {user.username}</li>
            <li>
              <Link to="/add-sample"
              className=" bg-indigo-500 px-4 py-1 rounded-sm flex"
              > Clasificar muestra</Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Cerrar sesion
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login"
              className=" bg-indigo-500 px-4 py-1 rounded-sm"
              > Login</Link>
            </li>
            <li>
              <Link to="/register"
              className=" bg-indigo-500 px-4 py-1 rounded-sm"
              > Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
