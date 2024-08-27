import { Avatar, Box } from "@mui/material";
import React from "react";
import RankedDataDisplay from "../RankedDataDisplay/RankedDataDisplay";
import { RankedData } from "../../types/RankedData";
import "./PlayerHeader.css";

interface PlayerHeaderProps {
  id: string;
  name: string;
  tagLine: string;
  region: string;
  profileIconId: number;
  summonerLevel: number;
  soloData: Array<RankedData>;
  flexData: Array<RankedData>;
}

const PlayerHeader: React.FC<PlayerHeaderProps> = (p) => {
  return (
    <Box display={"flex"} m={"5vw"}>
      <Avatar
        className="profile-icon"
        alt="Profile Icon"
        src={`http://ddragon.leagueoflegends.com/cdn/14.14.1/img/profileicon/${p.profileIconId}.png`}
        style={{width: "10vw", height: "10vw"}}
      />
      <Box className="container">
        <Box className="first-header-container">
          <Box className="player-name">{p.name}</Box>
          <Box className="tag-line">{`#${p.tagLine}`}</Box>
        </Box>
        <Box className="second-header-container">
          <Box>Level {p.summonerLevel}</Box>
          <Box className="region">{p.region}</Box>
        </Box>
        <RankedDataDisplay soloData={p.soloData} flexData={p.flexData} />
      </Box>
    </Box>
  );
};

export default PlayerHeader;
