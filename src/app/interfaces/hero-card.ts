import { Card } from './card';

export interface HeroCard extends Card {
    club: string;
    club_attack: number;
    club_defence: number;
    country: string;
}
