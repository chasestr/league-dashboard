import axios from "axios";
import { REGION_MAPPING } from "../regionMapping";
import { RankedData } from "../types/RankedData";

const RIOT_API_KEY = process.env.RIOT_API_KEY;

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
    const accountResponse = await axios.get(
      `https://${regional}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      }
    );
    const { puuid } = accountResponse.data;

    const playerResponse = await axios.get(
      `https://${platform}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      }
    );

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

    const recentMatchesIds = recentMatches.data;
    const matchData = await getMatchData(recentMatchesIds, regional);

    return {
      ...playerResponse.data,
      soloData,
      flexData,
      matchData
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

const getMatchData = (matchIds: Array<string>, regional: string) => {
  const matchData = matchIds.map(async (id: string) => {
    /* Obviously this approach isn't ideal as it significantly slows down the 
    application when trying to fetch user match history. The only reason that 
    this approach is being used is due to the significant limitations that are 
    placed on the number of api requests that the Riot developer api allows for */
    await new Promise(resolve => setTimeout(resolve, 10000));
    /* */
    const data = await axios.get(
      `https://${regional}.api.riotgames.com/lol/match/v5/matches/${id}`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      }
    );
    return (
      data.data
    )
  }
  );
  return Promise.all(matchData);
}