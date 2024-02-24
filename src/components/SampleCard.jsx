import { useAuth } from "../context/AuthContext";
import { useSamples } from "../context/SamplesContext";
import { Link } from "react-router-dom";
import { useState } from "react";

function SampleCard({ sample }) {
  const { user } = useAuth();
  const { deleteSample } = useSamples();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteSample(sample._id);
    setShowModal(false);
  };

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
            {showModal ? (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-zinc-700 p-4 rounded-md">
                  <p>¿Estás seguro de que deseas eliminar este elemento?</p>
                  <div className="flex justify-end mt-4">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-2"
                      onClick={handleDelete}
                    >
                      Eliminar
                    </button>
                    <button
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                  onClick={() => setShowModal(true)}
                >
                  Eliminar
                </button>
                <Link
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  to={`/samples/${sample._id}`}
                >
                  Editar
                </Link>
              </>
            )}
          </>
        ) : (
          <>
            <Link
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              to={`/samples/${sample._id}`}
            >
              Ver Detalles
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default SampleCard;