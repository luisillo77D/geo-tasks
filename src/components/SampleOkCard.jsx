import { useSamples } from "../context/SamplesContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalSampleOk from "./ModalSampleOk";

function SampleOkCard({ sample }) {
    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
    //creamos componente basico de react para mostrar las muestras
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md" onClick={handleOpenModal}>
          <header className="flex justify-between">
            <h1 className="text-2xl font-bold ">{sample.title} </h1>
          </header>
          <p className="text-slate-300">{sample.description} </p>
          <p className="text-slate-300">{sample.texture} </p>
          <p className="text-slate-300">{sample.user.username} </p>
          {showModal && (
        <ModalSampleOk sample={sample} onClose={handleCloseModal} />
      )}
        </div>
      );
    }
    
    export default SampleOkCard;