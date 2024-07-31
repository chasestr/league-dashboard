import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PlayerHeader from '../components/PlayerHeader';

interface PlayerData {
  id: string;
  name: string;
  profileIconId: number;
  summonerLevel: number;
}

const PlayerPage: React.FC = () => {
  const { region, gameName, tagLine } = useParams<{ region:string; gameName: string; tagLine: string }>();
  console.log('Player ID:', gameName);
  console.log('Region:', tagLine);
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/player/players/${gameName}/${tagLine}?region=${region}`);
        setPlayerData({...response.data, name: gameName});
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, [region, gameName, tagLine]);

  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <PlayerHeader {...playerData} region={region ? region : ''} tagLine={tagLine ? tagLine : ''}/>
  );
};

export default PlayerPage;
