import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface Statistics {
    timer: number
    level: number
    scores: number
    bonus: number
    gameStatus: 'unstarted' | 'started' | 'finish',
    answersCount: number
    correctAnswersCount: number
}

const initialState: Statistics = {
    timer: 60,
    level: 1,
    scores: 0,
    bonus: 1,
    gameStatus: 'unstarted',
    answersCount: 0,
    correctAnswersCount: 0
}

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        increaseLevel(state) {
            state.level += 1
        },
        decreaseLevel(state) {
            if (state.level !== 1) state.level -= 1
        },
        increaseBonus(state) {
            if (state.bonus < 5) state.bonus += 1
        },
        decreaseBonus(state) {
            if (state.bonus > 1) state.bonus -= 1
        },
        setScores(state, action) {
            state.scores = action.payload
        },
        setTimer(state, action) {
            state.timer = action.payload
        },
        setGameStatus(state, action: PayloadAction<Statistics['gameStatus']> ) {
            state.gameStatus = action.payload
        },
        increaseAnswersCount(state) {
            state.answersCount += 1
        },
        increaseCorrectAnswersCount(state) {
            state.correctAnswersCount += 1
        }
    },
})

// export const {increaseLevel, increaseBonus, decreaseBonus, setScores} = statisticsSlice.actions

// export const statisticsSliceReducer = statisticsSlice.reducer

export const {reducer: statisticsSliceReducer, actions: statisticsSliceActions} = statisticsSlice