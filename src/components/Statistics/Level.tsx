import { RootState, useAppSelector } from "../../redux/store"
import styles from '../../styles/Header.module.scss'


const Level = () => {
  const level = useAppSelector((state: RootState) => state.statistics.level)

  return (
    <div>
        <div className={styles.text}>
          Уровень
        </div>
        <div className={styles.value}>
          {level}
          {/* 1-9 ? */}
        </div>
    </div>
  )
}

export default Level