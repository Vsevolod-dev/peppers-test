import { RootState, useAppSelector } from '../../redux/store'
import styles from '../../styles/Header.module.scss'

const Scores = () => {
    const scores = useAppSelector((state: RootState) => state.statistics.scores)

    return (
        <div>
            <div className={styles.text}>
                Очки
            </div>
            <div className={styles.value}>
                {scores}
            </div>
        </div>
    )
}

export default Scores