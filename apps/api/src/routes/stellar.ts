import { Router } from "express";
import { stellarServer } from "../config/stellar";

const router = Router();

router.get("/ping", async (_req, res) => {
  try {
    const account = await stellarServer.loadAccount(
      "GBZXN7PIRZGNMHGAJB5JY6NS4NNTKS7K6YVJARX7O67I2FR5S4LJ7O3F"
    );

    return res.json({
      ok: true,
      horizon: "connected",
      sequence: account.sequence
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return res.status(500).json({
      ok: false,
      message: "Failed to connect to Stellar Horizon",
      error: message
    });
  }
});

export default router;
