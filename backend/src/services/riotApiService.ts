import axios from 'axios';

const RIOT_API_KEY = process.env.RIOT_API_KEY;

export const getPlayerData = async (gameName: string, tagLine: string) => {
  if (!RIOT_API_KEY) {
    throw new Error('Riot API key is not set in the environment variables');
  }

  try {
    // Fetch PUUID using gameName and tagLine
    const accountResponse = await axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`, {
      headers: {
        'X-Riot-Token': RIOT_API_KEY
      }
    });
    const { puuid } = accountResponse.data;

    // Fetch player data using PUUID
    const playerResponse = await axios.get(`https://NA1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`, {
      headers: {
        'X-Riot-Token': RIOT_API_KEY
      }
    });

    return playerResponse.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw new Error('Error fetching player data from Riot API');
  }
};
