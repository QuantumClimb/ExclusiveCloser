import express from 'express';
import cors from 'cors';
import videosHandler from './api/videos';

const app = express();
const port = 3001;

// Middleware to parse JSON bodies (similar to what Vercel does automatically)
app.use(express.json());
app.use(cors());

// Map the /api/videos route to our Vercel Serverless Function
app.all('/api/videos', async (req, res) => {
  try {
    // The Express req/res objects are mostly compatible with VercelRequest/VercelResponse
    await videosHandler(req as any, res as any);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Local API server running at http://localhost:${port}`);
});
