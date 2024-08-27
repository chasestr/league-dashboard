import React from "react";
import { Box, Paper } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import "./RankedDataDisplay.css";
import { RankedData } from "../../types/RankedData";

interface RankedDataDisplayProps {
  soloData: RankedData[];
  flexData: RankedData[];
}

const RankedDataDisplay: React.FC<RankedDataDisplayProps> = ({
  soloData,
  flexData,
}) => {
  const renderRankedInfo = (
    data: RankedData,
    title: string,
    firstCard: boolean
  ) => (
    <Paper
      elevation={3}
      className="card-container"
      style={{
        marginLeft: firstCard ? "0" : "1vw",
      }}
    >
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: data.wins, label: "Wins", color: "green" },
              { id: 1, value: data.losses, label: "Losses", color: "red" },
            ],
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
        width={200}
      />
      <div className="title">
        <u>{title}:</u>
      </div>
      <div className="rank">
        {data.tier} {data.rank} - {data.leaguePoints} LP
      </div>
      <div className="wl-ratio">
        {data.wins}W-{data.losses}L -{" "}
        {((data.wins / (data.wins + data.losses)) * 100).toFixed(2)}%
      </div>
    </Paper>
  );

  return (
    <Box className="ranked-container">
      {soloData.length > 0 && renderRankedInfo(soloData[0], "Solo", true)}
      {flexData.length > 0 && renderRankedInfo(flexData[0], "Flex", false)}
    </Box>
  );
};

export default RankedDataDisplay;
