import { useEffect, useState } from 'react'
import { useAppDispatch } from '../redux/store'
import cn from 'classnames'
import { statisticsSliceActions } from '../redux/slices/statisticsSlice'

const BeginContainer = () => {
    const [number, setNumber]  = useState(3)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (number !== 0) {
            let interval: NodeJS.Timer
            interval = setInterval(() => {
                setNumber(number - 1)
            }, 1000)

            return () => clearInterval(interval)
        } else {
            dispatch(statisticsSliceActions.setGameStatus('started'))
        }
    }, [number])

  return (
    <div className={cn('container-background', 'container-background--unstarted')} style={{backgroundColor: '#1d4a5d'}}>
        <div className='unstarted-timer'>{number}</div>
    </div>
  )
}

export default BeginContainer