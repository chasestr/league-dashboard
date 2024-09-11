import React from "react";
import { ParticipantDto } from "../../types/ParticipantDto";
import { Box } from "@mui/material";
import "./PlayerItems.css";
import ItemContainer from "../ItemContainer/ItemContainer";

interface PlayerItemsProps {
    player: ParticipantDto;
}

const PlayerItems = (props: PlayerItemsProps) => {
  return (
    <Box className="main-player-items-container">
      <Box className="main-player-items-container-row-1">
        <ItemContainer id={props.player.item0}/>
        <ItemContainer id={props.player.item1}/>
        <ItemContainer id={props.player.item2}/>
        <ItemContainer id={props.player.item3}/>
      </Box>
      <Box className="main-player-items-container-row-2">
        <ItemContainer id={props.player.item4}/>
        <ItemContainer id={props.player.item5}/>
        <ItemContainer id={props.player.item6}/>
      </Box>
    </Box>
  );
};

export default PlayerItems;