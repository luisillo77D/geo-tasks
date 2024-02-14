import { useForm } from "react-hook-form";
import { useSamples } from "../context/SamplesContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function SampleFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { samples, createSample, getSample, updateSample } = useSamples();
  const navigate = useNavigate();
  const params = useParams();

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

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateSample(params.id, data);
    } else {
      createSample(data);
    }
    navigate("/mysamples");
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2">
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
          <button className=" bg-indigo-500 py-2 px-3 rounded-md">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default SampleFormPage;
