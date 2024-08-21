import axios from "axios";
import { REGION_MAPPING } from "../regionMapping";

const RIOT_API_KEY = process.env.RIOT_API_KEY;

interface RankedData {
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

export const getPlayerData = async (
  gameName: string,
  tagLine: string,
  region: string
) => {
  if (!RIOT_API_KEY) {
    throw new Error("Riot API key is not set in the environment variables");
  }

  const regionConfig = REGION_MAPPING[region];

  if (!regionConfig) {
    throw new Error("Invalid region specified");
  }

  const { platform, regional } = regionConfig;

  try {
    // Fetch PUUID using gameName and tagLine
    const accountResponse = await axios.get(
      `https://${regional}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      }
    );
    const { puuid } = accountResponse.data;

    // Fetch player data using PUUID
    const playerResponse = await axios.get(
      `https://${platform}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      }
    );

    // Fetch ranked data using summoner ID
    const rankedResponse = await axios.get(
      `https://${platform}.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerResponse.data.id}`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      }
    );
    const rankedData = rankedResponse.data;
    const soloData = rankedData.filter(
      (d: RankedData) => d.queueType == "RANKED_SOLO_5x5"
    );
    const flexData = rankedData.filter(
      (d: RankedData) => d.queueType == "RANKED_FLEX_SR"
    );
    const recentMatches = await axios.get(
      `https://${regional}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      }
    );
    /* 
    TO-DO:
    fetch match data for 10-20 most recent matches (if rate limit allows) and create component
    to display data for each match on PlayerProfile page
    */
    const recentMatchesIds = recentMatches.data.slice(0, 4);
    const matchData = await axios.get(
      `https://${regional}.api.riotgames.com/lol/match/v5/matches/${recentMatchesIds[0]}`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      }
    );
    console.log(matchData);
    /* */

    return {
      ...playerResponse.data,
      soloData,
      flexData,
    };
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Error fetching player data from Riot API");
  }
};
