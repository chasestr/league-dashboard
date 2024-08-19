import { Avatar, Box } from "@mui/material";
import React from "react";
import { RankedData } from "../pages/PlayerProfile";
import RankedDataDisplay from "./RankedDataDisplay";

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
        alt="Profile Icon"
        src={`http://ddragon.leagueoflegends.com/cdn/14.14.1/img/profileicon/${p.profileIconId}.png`}
        sx={{ width: "15vw", height: "15vw" }}
        style={{ borderRadius: "1vw", objectFit: "cover" }}
      />
      <Box display={"flex"} ml={"2vw"} flexDirection={"column"}>
        <Box display={"flex"} fontSize={"3vw"}>
          <Box fontWeight={"bold"}>{p.name}</Box>
          <Box color="black" ml={"1vw"}>{`#${p.tagLine}`}</Box>
        </Box>
        <Box display={"flex"} fontSize={"1.5vw"}>
          <Box>Level {p.summonerLevel}</Box>
          <Box ml={"1vw"}>{p.region}</Box>
        </Box>
        <RankedDataDisplay soloData={p.soloData} flexData={p.flexData} />
      </Box>
    </Box>
  );
};

export default PlayerHeader;
