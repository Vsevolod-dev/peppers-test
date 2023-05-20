import { FC, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Question: FC = () => {
  const {answer, answerAnimation} = useSelector((state: RootState) => state.question)
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