import { useAuth } from "../context/AuthContext";
import { useSamples } from "../context/SamplesContext";
import { Link } from "react-router-dom";

function SampleCard({ sample }) {
  const { user } = useAuth();
  const { deleteSample } = useSamples();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold ">{sample.title} </h1>
      </header>
      <p className="text-slate-300">{sample.description} </p>
      <p className="text-slate-300">{sample.texture} </p>
      <p className="text-slate-300">{sample.user.username} </p>
      <div className=" flex gap-x-2 items-center">
        {user.role ? (
          <>
          <button
              className=" bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={() => {
                deleteSample(sample._id);
              }}
            >
              Rechazar
            </button>
            <Link
              className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              to={`/samples/${sample._id}`}
            >
              Aceptar
            </Link>
          </>
        ) : (
          <>
            <button
              className=" bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={() => {
                deleteSample(sample._id);
              }}
            >
              Borrar
            </button>
            <Link
              className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              to={`/samples/${sample._id}`}
            >
              Editar
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default SampleCard;
