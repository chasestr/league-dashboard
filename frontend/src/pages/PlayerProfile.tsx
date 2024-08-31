import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlayerHeader from "../components/PlayerHeader/PlayerHeader";
import MatchHistory from "../components/MatchHistory/MatchHistory";
import { PlayerData } from "../types/PlayerData";

const PlayerPage: React.FC = () => {
  const { region, gameName, tagLine } = useParams<{
    region: string;
    gameName: string;
    tagLine: string;
  }>();

  const [playerData, setPlayerData] = useState<PlayerData | null>(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/player/players/${gameName}/${tagLine}?region=${region}`
        );
        setPlayerData({ ...response.data, name: gameName, tagline: tagLine });
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayerData();
  }, [region, gameName, tagLine]);

  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PlayerHeader
      {...playerData}
      region={region ? region : ""}
      />
      <MatchHistory {...playerData}/>
    </div>
  );
};

export default PlayerPage;
