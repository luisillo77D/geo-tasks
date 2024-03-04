import { useEffect } from "react";
import { useSamples } from "../context/SamplesContext";
import SampleOkCard from "../components/SampleOkCard";

function SamplesOkPage() {
  const { samplesOk, getAllSamplesOk } = useSamples();

  useEffect(() => {
    getAllSamplesOk();
    console.log("samplesOk", samplesOk);
  }, []);

  if (samplesOk.length === 0) return <h1>No tienes Muestras pendientes</h1>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5  gap-2">
      {samplesOk.map((sample) => (
        <SampleOkCard sample={sample} key={sample._id} />
      ))}
    </div>
  );
}

export default SamplesOkPage;
