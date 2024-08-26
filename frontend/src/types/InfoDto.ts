import { ParticipantDto } from "./ParticipantDto";
import { TeamDto } from "./TeamDto";

export interface InfoDto {
    endOfGameResult: string;
    gameCreation: bigint;
    gameDuration: bigint;
    gameEndTimestamp: bigint;
    gameId: bigint;
    gameMode: string;
    gameName: string;
    gameStartTimestamp: bigint;
    gameType: string;
    gameVersion: string;
    mapId: number;
    participants: Array<ParticipantDto>;
    platformId: string;
    queueId: number;
    teams: Array<TeamDto>;
    tournamentCode: string;
}