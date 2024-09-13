import { BanDto } from "./BanDto";
import { ObjectivesDto } from "./ObjectivesDto";

export interface TeamDto {
  bans: Array<BanDto>;
  objectives: ObjectivesDto;
  teamId: number;
  win: boolean;
}
