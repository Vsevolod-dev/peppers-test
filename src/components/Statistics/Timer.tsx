import { useEffect } from 'react'
import { useActionCreators } from '../../hooks/useActionCreators'
import { RootState, useAppSelector } from '../../redux/store'
import { statisticsSliceActions } from '../../redux/slices/statisticsSlice'
import styles from '../../styles/Header.module.scss'

const Timer = () => {
    const timer = useAppSelector((state: RootState) => state.statistics.timer)
    const {setTimer} = useActionCreators(statisticsSliceActions)

    useEffect(() => {
        let interval: NodeJS.Timer

        if (timer !== 0) {
            interval = setInterval(() => {
              setTimer(timer - 1)
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [setTimer, timer])

  return (
    <div>
        <div className={styles.text}>
          Время
        </div>
        <div className={styles.value}>
          {timer}
        </div>
    </div>
  )
}

export default Timer