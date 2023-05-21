import {useEffect, useRef, useState} from 'react'
import { RootState, useAppSelector } from '../redux/store'
import { colors } from '../data'
import { getRandomInt } from '../utils'
import cn from 'classnames'

const BackgroundContainer = () => {
  const backRef = useRef<HTMLDivElement>(null)
  const answer = useAppSelector((state: RootState) => state.question.answer)
  const [backgroundColor, setBackgroundColor] = useState(colors[getRandomInt(6)])

  useEffect(() => {
    setBackgroundColor(colors[getRandomInt(6)])
  }, [answer])

  return (
    <div ref={backRef} className={cn('container-background', `background--${backgroundColor}`)}></div>
  )
}

export default BackgroundContainer