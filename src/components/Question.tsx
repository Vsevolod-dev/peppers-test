import { FC, useEffect, useRef } from 'react'
import { RootState, useAppSelector } from '../redux/store'
import styles from '../styles/Question.module.scss'

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
    <div className={styles.question}>
          <div className={styles.text}>Найдите указанное число:</div>
          <div ref={answerRef} className={styles.number}>{answer}</div>
    </div>
  )
}

export default Question