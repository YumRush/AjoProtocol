import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import healthRoutes from "./routes/health";
import stellarRoutes from "./routes/stellar";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.use("/api", healthRoutes);
app.use("/stellar", stellarRoutes);

export default app;
