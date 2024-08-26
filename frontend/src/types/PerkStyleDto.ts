import { PerkStyleSelectionDto } from "./PerkStyleSelectionDto";

export interface PerkStyleDto {
    description: string;
    selections: Array<PerkStyleSelectionDto>;
    style: number;
}