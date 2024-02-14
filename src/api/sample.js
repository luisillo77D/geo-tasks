import axios from "./axios";

export const getSamplesRequest = () => axios.get("/samples");

export const getSampleRequest = (id) => axios.get(`/samples/${id}`);

export const createSampleRequest = (sample) => axios.post("/samples", sample);

export const updateSampleRequest = (id,sample) =>
  axios.put(`/samples/${id}`, sample);

export const delateSampleRequest = (id) => axios.delete(`/samples/${id}`);

export const getAllSamplesRequest = () => axios.get("/allsamples");
