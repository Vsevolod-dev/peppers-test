import React from 'react'
import { RootState, useAppSelector } from '../redux/store'

const FinishContainer = () => {
    const {scores, answersCount, correctAnswersCount} = useAppSelector((state: RootState) => state.statistics)

    return (
        <div className='container-background'>
            <div className="results_images">
                <h3>Ваши результаты</h3>
            </div>
            <div>Текущий результат {scores}</div>
            <div>Верных ответов {correctAnswersCount} из {answersCount}</div>
            <div> Точность ответов {(correctAnswersCount/answersCount * 100).toFixed(2)}%</div>
        </div>
    )
}

export default FinishContainer