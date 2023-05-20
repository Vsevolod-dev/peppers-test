import { configureStore } from '@reduxjs/toolkit'
import {useDispatch, useSelector} from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import {questionSliceReducer} from './slices/questionSlice';
import {statisticsSliceReducer} from './slices/statisticsSlice';

export const store = configureStore({
    reducer: {
        question: questionSliceReducer,
        statistics: statisticsSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector