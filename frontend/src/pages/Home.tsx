import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader/PageHeader";

const Home: React.FC = () => {
  return (
    <Box>
      <PageHeader />
      <SearchBar />
    </Box>
  );
};

export default Home;
