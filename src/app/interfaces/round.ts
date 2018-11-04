export interface Round {
    roundsWinner: {
        round_1: string;
        round_2: string;
        round_3: string;
    };
    current_round: number;
    is_ending: boolean;
    winner: string;
}
