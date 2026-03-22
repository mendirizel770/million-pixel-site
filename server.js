import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let pixels = [];

app.get("/pixels", (req, res) => {
  res.json(pixels);
});

app.post("/buy", (req, res) => {
  const { index, text, image, link } = req.body;

  pixels.push({
    index,
    text,
    image,
    link,
    purchased: true,
  });

  res.json({ success: true });
});

app.get("/", (req, res) => {
  res.send("🚀 Million Pixel Server עובד!");
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
