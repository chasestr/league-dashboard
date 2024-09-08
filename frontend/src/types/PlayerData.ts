import { MatchData } from "./MatchData";
import { RankedData } from "./RankedData";

export interface PlayerData {
  id: string;
  name: string;
  tagline: string;
  region: string;
  profileIconId: number;
  summonerLevel: number;
  soloData: Array<RankedData>;
  flexData: Array<RankedData>;
  matchData: Array<MatchData>;
}
