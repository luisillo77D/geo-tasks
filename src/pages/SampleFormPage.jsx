import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSamples } from "../context/SamplesContext";
import { useNavigate, useParams } from "react-router-dom";
import Mapa from "../components/mapa";
import UploadModal from "../components/UploadModal";

function SampleFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createSample, getSample, updateSample } = useSamples();
  const navigate = useNavigate();
  const params = useParams();

  // Estado para almacenar las coordenadas seleccionadas
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    async function loadSample() {
      if (params.id) {
        const sample = await getSample(params.id);
        setValue("title", sample.title);
        setValue("description", sample.description);
        setValue("texture", sample.texture);
      }
    }
    loadSample();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    // Incluye las coordenadas en el objeto sample antes de enviar
    console.log(coordinates.lat);
    const sampleData = {
      ...data,
      latitude: parseFloat(coordinates.lat),
      longitude: parseFloat(coordinates.lng)
    };
    if (params.id) {
      updateSample(params.id, sampleData);
    } else {
      console.log(sampleData);
      await createSample(sampleData);
    }
    navigate("/mysamples");
  });

  return (
    <div className="flex h-full justify-center gap-6">
      <div className="bg-zinc-800 max-w-md w-2/4 p-10 rounded-md my-2">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />

          <label htmlFor="texture">Textura</label>
          <select
            name="Textura"
            {...register("texture")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          >
            <option>Faneritica</option>
            <option>Vitrea</option>
            <option>Afanitica</option>
            <option>Foliada</option>
            <option>Clastica</option>
          </select>
          <label htmlFor="Descripcion">Descripcion</label>
          <textarea
            rows="3"
            placeholder="Descripcion"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          />
          {/* Campos ocultos para latitud y longitud */}
          <input type="hidden" {...register("latitude")} value={coordinates.lat} />
          <input type="hidden" {...register("longitude")} value={coordinates.lng} />
          <Mapa setCoordinates={setCoordinates} />
          <div className="flex justify-between">
            <button
              className="bg-red-500 py-2 px-3 rounded-md"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancelar
            </button>
            <button className=" bg-indigo-500 py-2 px-3 rounded-md">Guardar</button>
          </div>
        </form>
      </div>
      <UploadModal/>
    </div>
  );
}

export default SampleFormPage;
