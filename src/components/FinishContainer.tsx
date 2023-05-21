import { RootState, useAppSelector } from '../redux/store'

const FinishContainer = () => {
    const {scores, answersCount, correctAnswersCount} = useAppSelector((state: RootState) => state.statistics)

    return (
        <div>
            <div className='container-background container-background--results'></div>
            <div className='results'>
                <div className="results_images">
                        <h3>Ваши результаты</h3>
                </div>
                <div className='results_content'>
                    <table className='results_table'>
                        <tbody>
                            <tr>
                                <td>Текущий результат</td>
                                <td>{scores}</td>
                            </tr>
                            <tr>
                                <td>Верных ответов</td>
                                <td>{correctAnswersCount} из {answersCount}</td>
                            </tr>
                            <tr>
                                <td>Точность ответов</td>
                                <td>{(correctAnswersCount/answersCount * 100).toFixed(2)}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className='button' onClick={() => window.location.reload()}>ЕЩЕ РАЗ?</button>
            </div>
        </div>
    )
}

export default FinishContainer