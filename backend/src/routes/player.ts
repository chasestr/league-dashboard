import express from 'express';
import { getPlayerData } from '../services/riotApiService';

const router = express.Router();

router.get('/players/:gameName/:tagLine', async (req, res) => {
  const { gameName, tagLine } = req.params;

  try {
    const playerData = await getPlayerData(gameName, tagLine);
    res.json(playerData);
  } catch (error) {
    console.error('Failed to fetch player data:', error);
    res.status(500).json({ error: 'Failed to fetch player data' });
  }
});

export default router;
