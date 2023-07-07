import axios from "axios";

export const fetchRegister = async (data: any): Promise<any> => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/user/create/",
    data,
  );
  return response;
};

export const fetchToken = async (data: any): Promise<any> => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/user/token/",
    data,
  );
  return response.data.token;
};

export const fetchMe = async (): Promise<any> => {
  const token = localStorage.getItem("token") ?? "";
  const response = await axios.get("http://127.0.0.1:8000/api/user/me/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response.data;
};
