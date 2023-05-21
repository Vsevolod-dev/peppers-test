import { FC, useEffect, useRef } from 'react'
import { RootState, useAppSelector } from '../redux/store'

const Question: FC = () => {
  const {answer, answerAnimation} = useAppSelector((state: RootState) => state.question)
  const answerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (answerAnimation) {
      answerRef.current?.classList.remove('ng-leave')
      answerRef.current?.classList.add(answerAnimation)
    }
  }, [answerAnimation])

  return (
    <div className="question">
          <div className="question__text">Найдите указанное число:</div>
          <div ref={answerRef} className="question__number">{answer}</div>
    </div>
  )
}

export default Question