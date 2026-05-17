import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes (Simulated Primary Backend)
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "Uptown CRM Backend" });
  });

  // Analytics Proxy/Implementation (Simulating FastAPI logic in Node for environment compatibility)
  app.get("/api/analytics", (req, res) => {
    // In a production environment, this could proxy to the FastAPI service
    // For this build, we calculate metrics directly or serve mock summaries until DB is live
    res.json({
      message: "Analytics service is operational",
      timestamp: Date.now()
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Uptown CRM running on http://localhost:${PORT}`);
  });
}

startServer();
