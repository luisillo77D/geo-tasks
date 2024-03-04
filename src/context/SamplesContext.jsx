import { createContext, useContext, useState } from "react";
import {
  createSampleRequest,
  getSamplesRequest,
  delateSampleRequest,
  getSampleRequest,
  updateSampleRequest,
  getAllSamplesRequest
} from "../api/sample";
import {
  createSampleOkRequest,
  delateSampleOkRequest,
  getSampleOkRequest,
  updateSampleOkRequest,
  getAllSamplesOkRequest
} from "../api/sampleOk";

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
  const [samplesOk, setSamplesOk] = useState([]);

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
    } catch (error) {
      console.log(error);
    }
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

  const createSampleOk = async (sample) => {
    try {
      const res = await createSampleOkRequest(sample);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSampleOk = async (id) => {
    try {
      const res = await delateSampleOkRequest(id);
      if (res.status === 204)
        setSamplesOk(samplesOk.filter((sample) => sample._id != id));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getSampleOk = async (id) => {
    try {
      const res = await getSampleOkRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllSamplesOk = async () =>{
    try {
      const res = await getAllSamplesOkRequest();
      setSamplesOk(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const updateSampleOk = async (id, sample) => {
    try {
      await updateSampleOkRequest(id, sample);
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
        createSampleOk,
        deleteSampleOk,
        getSampleOk,
        updateSampleOk,
        getAllSamplesOk,
        samplesOk
      }}
    >
      {children}
    </SampleContext.Provider>
  );
}
