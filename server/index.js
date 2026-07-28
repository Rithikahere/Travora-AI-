import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import axios from "axios";

dotenv.config();
console.log("Unsplash Key:", process.env.UNSPLASH_ACCESS_KEY);

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


async function getUnsplashImage(query) {
  try {
    const response = await axios.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query,
          per_page: 1,
          orientation: "landscape",
        },
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    return response.data.results[0]?.urls?.regular || "";
  } catch (err) {
    console.log("Image not found:", query);
    return "";
  }
}
app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are an AI travel planner. Respond ONLY in valid JSON with this structure:

{
  "destination": "",
  "duration": "",
  "summary": "",
  "itinerary": [
    {
      "day": 1,
      "activities": []
    }
  ]
}`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const itinerary = JSON.parse(
      completion.choices[0].message.content
    );

  

    const image = await getUnsplashImage(itinerary.destination);
    for (const day of itinerary.itinerary) {
  const updatedActivities = [];

  for (const activity of day.activities) {
    const activityImage = await getUnsplashImage(
      `${activity} ${itinerary.destination}`
    );

    updatedActivities.push({
      title: activity,
      image: activityImage,
    });
  }

  day.activities = updatedActivities;
}
console.log("Returned image:", image);
    res.json({
  success: true,
  hello: "THIS IS THE NEW BACKEND",
  response: {
    ...itinerary,
    image,
  },
});
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});