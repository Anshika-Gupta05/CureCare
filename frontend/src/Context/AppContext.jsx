import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
export const AppContext = createContext();
export const adminUrl = import.meta.env.VITE_ADMIN_URL;
const AppContextProvider = (props) => {
  const currency = "₹";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
  const [userData, setUserData] = useState(false);

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list");
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });
      if (data.success) {
        setUserData(data.userData);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  const value = {
    doctors,
    getDoctorsData,
    currency,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
  };
  useEffect(() => {
    getDoctorsData();
  }, []);
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
