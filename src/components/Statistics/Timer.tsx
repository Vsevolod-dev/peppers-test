import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActionCreators } from '../../hooks/useActionCreators'
import { RootState } from '../../redux/store'
import { statisticsSliceActions } from '../../redux/slices/statisticsSlice'

const Timer = () => {
    const timer = useSelector((state: RootState) => state.statistics.timer)
    const {setTimer} = useActionCreators(statisticsSliceActions)

    useEffect(() => {
        let interval: NodeJS.Timer

        if (timer !== 0) {
            interval = setInterval(() => {
              setTimer(timer - 1)
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [timer])

  return (
    <div className="header__block">
        <div className="block__text">
        Время
        </div>
        <div className="block__index">
        {timer}
        </div>
    </div>
  )
}

export default Timer