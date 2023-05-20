import { RootState, useAppSelector } from '../../redux/store'

const Scores = () => {
    const scores = useAppSelector((state: RootState) => state.statistics.scores)

    return (
        <div className="header__block">
            <div className="block__text">
            Очки
            </div>
            <div className="block__index">
            {scores}
            </div>
        </div>
    )
}

export default Scores