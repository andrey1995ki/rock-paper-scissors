export interface GameState {
    currentMode: 'default' | 'bonus'
    selectedItem: undefined | Item
    selectedHouseItem: undefined | Item
    gameResult: undefined | 'win' | 'lose'
    score: number
}

export type Item = 'rock'| 'scissors'| 'paper'| 'lizard'| 'spock'

