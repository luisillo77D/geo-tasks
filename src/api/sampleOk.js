import axios from "./axios";

export const getSampleOkRequest = (id) => axios.get(`/samplesOk/${id}`);

export const createSampleOkRequest = (sample) => axios.post("/samplesOk", sample);

export const updateSampleOkRequest = (id,sample) =>
  axios.put(`/samplesOk/${id}`, sample);

export const delateSampleOkRequest = (id) => axios.delete(`/samplesOk/${id}`);

export const getAllSamplesOkRequest = () => axios.get("/allsamplesOk");