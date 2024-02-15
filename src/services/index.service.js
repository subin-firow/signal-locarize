import axios from "axios";

export const Save = async (data) => {
  return await axios.post(`http://localhost:5008/`,data);
 /*const url = process.env.REACT_APP_API_URL;
 console.log(url)
 return await axios.post(url , data);*/
};

export const GetData = async (com_id , loc_id , spot_id) => {
  return await axios.get(`http://localhost:5008/${com_id}/${loc_id}/${spot_id}`);
 /* //return await axios.get(`${process.env.REACT_APP_API_URL}${com_id}/${loc_id}/${spot_id}`);
  //return await axios.get(`${process.env.REACT_APP_API_URL}/${com_id}/${loc_id}/${spot_id}`);
  const url = process.env.REACT_APP_API_URL+com_id+'/'+loc_id+'/'+spot_id;
  console.log(url);
 return await axios.get(url);*/
};

export const getRandomLiveNunber = async (id) => {
  return await axios.get(`http://localhost:5008/v1/random-live-number`);
};
