import React from 'react';
import { Box, Paper } from '@mui/material';
import { RankedData } from '../pages/PlayerProfile';
import { PieChart } from '@mui/x-charts';

interface RankedDataDisplayProps {
  soloData: RankedData[];
  flexData: RankedData[];
}

const RankedDataDisplay: React.FC<RankedDataDisplayProps> = ({ soloData, flexData }) => {
  const renderRankedInfo = (data: RankedData, title: string, firstCard: boolean) => (
    <Paper elevation={3} style={{
      padding: '1.5vw',
      marginTop: "1vw",
      marginLeft: firstCard ? "0" : "1vw",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }}>
      <PieChart series={[{
        data: [
          { id: 0, value: data.wins, label: 'Wins', color: "green" },
          { id: 1, value: data.losses, label: 'Losses', color: "red" }
        ],
      }]}
      height={200}
      width={200}
      />
      <div style={{ fontSize: '2vw', fontWeight: 'bold' }}>
        <u>{title}:</u>
      </div>
      <div style={{ fontSize: '1.5vw' }}>
        {data.tier} {data.rank} - {data.leaguePoints} LP
      </div>
      <div style={{ fontSize: '1.5vw', fontWeight: 'bold' }}>
        {data.wins}W-{data.losses}L - {((data.wins / (data.wins + data.losses)) * 100).toFixed(2)}%
      </div>
    </Paper>
  );

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
      {soloData.length > 0 && renderRankedInfo(soloData[0], 'Solo', true)}
      {flexData.length > 0 && renderRankedInfo(flexData[0], 'Flex', false)}
    </Box>
  );
};

export default RankedDataDisplay;
