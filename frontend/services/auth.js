import axios from "axios";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const handleLogin = async (email, password) => {
  try {
    return await axios.post(`${apiBaseUrl}auth/login`, {
      email,
      password,
    });
  } catch (error) {
    return error;
  }
};
export const handleSignup = async (data) => {
  try {
    return await axios.post(`${apiBaseUrl}auth/signup`, data);
  } catch (error) {
    return error;
  }
};
