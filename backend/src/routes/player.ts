import express from "express";
import { getPlayerData } from "../services/riotApiService";

const router = express.Router();

router.get("/players/:gameName/:tagLine", async (req, res) => {
  const { gameName, tagLine } = req.params;
  const { region } = req.query;

  if (!region) {
    return res.status(400).json({ error: "Region is required" });
  }

  try {
    const playerData = await getPlayerData(gameName, tagLine, region as string);
    res.json(playerData);
  } catch (error) {
    console.error("Failed to fetch player data:", error);
    res.status(500).json({ error: "Failed to fetch player data" });
  }
});

export default router;
