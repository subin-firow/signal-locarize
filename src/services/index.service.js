import axios from "axios";

export const Save = async (data) => {
  return await axios.post(`http://localhost:5008/`,data);
};

export const GetData = async (id) => {
  return await axios.get(`http://localhost:5008/${id}`);
};