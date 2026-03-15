import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT; // The port your express server will be running on.

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
