import axios from "axios";

export const fetchRegister = async (data: any): Promise<any> => {
  return await axios.post("http://127.0.0.1:8000/api/user/create/", data);
};

export const fetchToken = async (data: any): Promise<any> => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/user/token/",
    data,
  );
  return response.data.token;
};

export const fetchMe = async (token: string): Promise<any> => {
  const response = await axios.get("http://127.0.0.1:8000/api/user/me/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response.data;
};
