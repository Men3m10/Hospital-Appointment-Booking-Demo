import axios from "axios";

const BASE_URL = "http://192.168.1.7:1337/api/";

const API_Key =
  "a7f1673a0637f279872349149500c5384357d0e22652afb883db8c2b711242f49076d0ac1ebafd89fd59f385ee374cc391706b2fe04773c121f24a40a008346aa0393ac92a7739c57c2921c47dab6f5d71384b770a231c87d28133a9514f210b4f54933f5447844eff9ce862e75abc96234a51bb1025ce8bc0a8d036ea1d359c";

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + API_Key,
  },
});

const getSliders = () => AxiosInstance.get("sliders?populate=*");

const getCategories = () => AxiosInstance.get("categories?populate=*");

const getPremiumHospitals = () =>
  AxiosInstance.get("hospitals?filters[Premium][$eq]=true&populate=*");

const getHospitalsByCategory = (category) =>
  AxiosInstance.get(
    "hospitals?filters[categories][Name][$in]=" + category + "&populate=*"
  );

const getDoctorsByCategoryAndHospital = (category) =>
  AxiosInstance.get(
    "doctors?filters[category][Name][$in]=" + category + "&populate=*"
  );

const createAppointment = (data) => {
  return AxiosInstance.post("appointments", data);
};

const getAllHospitals = () => AxiosInstance.get("hospitals?populate=*");

const getAllDoc = () => AxiosInstance.get("doctors?populate=*");
const getMyAppointments = (email) =>
  AxiosInstance.get(
    "appointments?filters[Email][$eq]=" + email + "&populate=*"
  );

export default {
  getSliders,
  getCategories,
  getPremiumHospitals,
  getHospitalsByCategory,
  getDoctorsByCategoryAndHospital,
  createAppointment,
  getAllHospitals,
  getAllDoc,
  getMyAppointments,
};
