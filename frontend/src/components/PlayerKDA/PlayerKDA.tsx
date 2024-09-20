import { Box } from "@mui/material";
import React from "react";
import "./PlayerKDA.css";

interface PlayerKDAProps {
  kills: number;
  deaths: number;
  assists: number;
}

const PlayerKDA = (props: PlayerKDAProps) => {
  return (
    <Box className="player-kda-container">
      {props.kills}/{props.deaths}/{props.assists} |{" "}
      {Math.round(
        ((props.kills + props.assists) / props.deaths + Number.EPSILON) * 100
      ) / 100}{" "}
      KDA
    </Box>
  );
};

export default PlayerKDA;
