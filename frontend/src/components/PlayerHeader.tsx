import { Avatar, Box } from "@mui/material";
import React from "react";

interface PlayerHeaderProps {
  id: string;
  name: string;
  tagLine: string;
  profileIconId: number;
  summonerLevel: number;
}

const PlayerHeader: React.FC<PlayerHeaderProps> = (p) => {
  return (
    <Box display={"flex"} m={"5vw"}>
      <Avatar
        alt="Profile Icon"
        src={`http://ddragon.leagueoflegends.com/cdn/14.14.1/img/profileicon/${p.profileIconId}.png`}
        sx={{maxWidth:"10vw", width:"auto", height:"auto"}}
        style={{borderRadius: "1vw 1vw 1vw 1vw"}}
      />
      <Box display={"flex"} ml={"2vw"} flexDirection={"column"}>
        <Box display={"flex"} fontSize={"3vw"}>
            <Box fontWeight={"bold"}>{p.name}</Box>
            <Box color="gray" ml={"1vw"}>{`#${p.tagLine}`}</Box>
        </Box>
        <Box display={"flex"} fontSize={"1.5vw"}>Level {p.summonerLevel}</Box>
      </Box>
    </Box>
  );
};

export default PlayerHeader;
