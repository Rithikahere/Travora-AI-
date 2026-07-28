import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const generateItinerary = async (prompt) => {
  const response = await api.post("/generate", {
    prompt,
  });

  return response.data;
};

export default api;