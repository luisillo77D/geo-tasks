import { createContext, useContext, useState } from "react";
import {
  createSampleRequest,
  getSamplesRequest,
  delateSampleRequest,
  getSampleRequest,
  updateSampleRequest,
  getAllSamplesRequest
} from "../api/sample";

const SampleContext = createContext();

export const useSamples = () => {
  const context = useContext(SampleContext);

  if (!context) {
    throw new Error("useSamples must be used whitin a SampleProvider");
  }

  return context;
};

export function SampleProvider({ children }) {
  const [samples, setSamples] = useState([]);

  const getSamples = async () => {
    try {
      const res = await getSamplesRequest();
      setSamples(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createSample = async (sample) => {
    try {
      const res = await createSampleRequest(sample);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSample = async (id) => {
    try {
      const res = await delateSampleRequest(id);
      if (res.status === 204)
        setSamples(samples.filter((sample) => sample._id != id));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getSample = async (id) => {
    try {
      const res = await getSampleRequest(id);
      return res.data;
    } catch (error) {}
  };

  const getAllSamples = async () =>{
    try {
      const res = await getAllSamplesRequest();
      setSamples(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const updateSample = async (id, sample) => {
    try {
      await updateSampleRequest(id, sample);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SampleContext.Provider
      value={{
        samples,
        createSample,
        getSamples,
        deleteSample,
        getSample,
        updateSample,
        getAllSamples,
      }}
    >
      {children}
    </SampleContext.Provider>
  );
}
