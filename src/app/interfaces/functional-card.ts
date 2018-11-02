import { Card } from './card';

export interface FunctionalCard extends Card {
    attack_special_trait_1: string;
    attack_special_trait_2: string;
    defence_special_trait_1: string;
    defence_special_trait_2: string;
    for_total_attack: boolean;
    for_total_defence: boolean;
    who_applies_to: string;
}
