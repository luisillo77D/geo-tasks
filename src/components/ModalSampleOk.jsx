import React from "react";
import MapaStatic from "./MapaStatic";

function ModalSampleOk({ sample, onClose }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" onClick={handleBackgroundClick}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className=" flex-row bg-zinc-600 p-8 rounded-lg z-50 relative w-2/4 h-3/4" onClick={(e) => e.stopPropagation()}>
        <span className="absolute top-0 right-0 m-6 cursor-pointer text-3xl" onClick={onClose}>&times;</span>
        <h2 className="text-xl font-bold mb-4">{sample.title}</h2>
        <p>{sample.description}</p>
        <h2 className="text-xl font-bold mb-4">Ubicacion</h2>
        <div className="flex items-center justify-center">
        <MapaStatic longitude={sample.longitude} latitude={sample.latitude}/>
        </div>
        
      </div>
    </div>
  );
}

export default ModalSampleOk;
