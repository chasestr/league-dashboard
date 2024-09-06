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
        <ItemContainer id={props.player.item0}/>
        <ItemContainer id={props.player.item1}/>
        <ItemContainer id={props.player.item2}/>
        <ItemContainer id={props.player.item3}/>
        <ItemContainer id={props.player.item4}/>
        <ItemContainer id={props.player.item5}/>
        <ItemContainer id={props.player.item6}/>
    </Box>
  );
};

export default PlayerItems;