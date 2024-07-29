import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface PlayerData {
  id: string;
  name: string;
  profileIconId: number;
  summonerLevel: number;
}

const PlayerPage: React.FC = () => {
  const { gameName, tagLine } = useParams<{ gameName: string; tagLine: string }>();
  console.log('Player ID:', gameName);
  console.log('Region:', tagLine);
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/player/players/${gameName}/${tagLine}`);
        setPlayerData(response.data);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, [gameName, tagLine]);

  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{playerData.name}</h1>
      <p>Level: {playerData.summonerLevel}</p>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/14.14.1/img/profileicon/${playerData.profileIconId}.png`}
        alt="Profile Icon"
      />
    </div>
  );
};

export default PlayerPage;
