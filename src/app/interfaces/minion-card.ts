import { Card } from "./card";

export interface MinionCard extends Card {
    club: string;
    cost: number;
    country: string;
    position: string;
    special_trait: string;
}
