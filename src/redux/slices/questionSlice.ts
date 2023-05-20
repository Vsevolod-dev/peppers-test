import {createSlice} from '@reduxjs/toolkit';
import { getRandomAnswer } from '../../utils';

interface Question {
    itemsCount: number
    answer: number
    answerAnimation: 'ng-leave' | 'ng-enter' | ''
    questionAnimation: 'ng-leave' | 'ng-enter' | ''
}

const initialState: Question = {
    itemsCount: 6,
    answer: getRandomAnswer(1),
    answerAnimation: '',
    questionAnimation: ''
}

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        rerenderAnswer(state, action) {
            const level = action.payload
            let length = 1

            if (level === 2) {
                length = 2
            } else if (level > 2 && level < 7) {
                length = 3
            } else if (level >= 7) {
                length = 4
            }

            state.answer = getRandomAnswer(length)
        },
        setItemsCount(state, action) {
            const level = action.payload

            let count = 6

            if (level >= 4 && level <= 5) {
                count = 12
            } else if (level >= 6 && level <= 7) {
                count = 16
            } else if (level >= 8) {
                count = 25
            }

            state.itemsCount = count
        },
        setAnswerAnimation(state, action) {
            state.answerAnimation = action.payload
        },
        setQuestionAnimation(state, action) {
            state.questionAnimation = action.payload
        }
    },
})

// export const {rerenderAnswer, setItemsCount, setAnswerAnimation, setQuestionAnimation} = questionSlice.actions

// export const questionSliceReducer = questionSlice.reducer
export const {reducer: questionSliceReducer, actions: questionSliceActions} = questionSlice