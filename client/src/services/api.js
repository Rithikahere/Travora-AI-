import axios from "axios";

const api = axios.create({
  
  baseURL: "https://travora-ai-backend.onrender.com",
});

export const generateItinerary = async (prompt) => {
  const response = await api.post("/generate", {
    prompt,
  });

  return response.data;
};

export default api;