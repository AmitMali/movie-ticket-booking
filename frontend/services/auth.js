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
  const inputData = {
    name: data.name,
    email: data.email,
    password: data.password,
    role: data.role,
  };
  try {
    const api = `${apiBaseUrl}auth/signup`;
    const result = await axios.post(api, inputData);

    return result;
  } catch (error) {
    return error;
  }
};
