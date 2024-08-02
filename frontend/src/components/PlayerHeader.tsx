import { Avatar, Box } from "@mui/material";
import React from "react";
import { RankedData } from "../pages/PlayerProfile";

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
        sx={{ maxWidth: "10vw", width: "auto", height: "auto" }}
        style={{ borderRadius: "1vw 1vw 1vw 1vw" }}
      />
      <Box display={"flex"} ml={"2vw"} flexDirection={"column"}>
        <Box display={"flex"} fontSize={"3vw"}>
          <Box fontWeight={"bold"}>{p.name}</Box>
          <Box color="gray" ml={"1vw"}>{`#${p.tagLine}`}</Box>
        </Box>
        <Box display={"flex"} fontSize={"1.5vw"}>
          <Box>Level {p.summonerLevel}</Box>
          <Box ml={"1vw"}>{p.region}</Box>
        </Box>
        {p.soloData.length > 0 ? (
          <Box display={"flex"} fontSize={"1.5vw"}>
            <Box fontWeight={"bold"}>
              <u>Solo:</u>
            </Box>
            <Box ml={"1vw"}>
              {p.soloData[0].tier} {p.soloData[0].rank} -{" "}
              {p.soloData[0].leaguePoints} LP{" "}
              <b>
                {p.soloData[0].wins}W-{p.soloData[0].losses}L -{" "}
                {(
                  (p.soloData[0].wins /
                    (p.soloData[0].wins + p.soloData[0].losses)) *
                  100
                ).toFixed(2)}
                %
              </b>
            </Box>
          </Box>
        ) : (
          <></>
        )}

        {p.flexData.length > 0 ? (
          <Box display={"flex"} fontSize={"1.5vw"}>
            <Box fontWeight={"bold"}>
              <u>Flex:</u>
            </Box>
            <Box ml={"1vw"}>
              {p.flexData[0].tier} {p.flexData[0].rank} -{" "}
              {p.flexData[0].leaguePoints} LP{" "}
              <b>
                {p.flexData[0].wins}W-{p.flexData[0].losses}L -{" "}
                {(
                  (p.flexData[0].wins /
                    (p.flexData[0].wins + p.flexData[0].losses)) *
                  100
                ).toFixed(2)}
                %
              </b>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default PlayerHeader;
