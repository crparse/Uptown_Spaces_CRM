import express from "express";
const app = express();

app.use(express.json());

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Uptown CRM Backend (Vercel)" });
});

app.get("/api/analytics", (req, res) => {
  res.json({
    message: "Analytics service is operational",
    timestamp: Date.now(),
    deployment: "Vercel"
  });
});

// Since Vercel handles static routing and SPA fallback via vercel.json,
// we don't need to serve static files from here or handle the * route.

export default app;
