import { FC, useRef } from 'react'
import cn from "classnames"
import { RootState, useAppSelector } from '../redux/store';
import { useEffect, useState } from 'react';
import { bonusSelector, levelSelector, scoresSelector, statisticsSliceActions } from '../redux/slices/statisticsSlice';
import { getRandomAnswer, getRandomInt } from '../utils';
import { useActionCreators } from '../hooks/useActionCreators';
import { questionSliceActions } from '../redux/slices/questionSlice';
import { animations, colors } from '../data';


interface Item {
    value: number,
    color: string,
    animation: string
}

const Field: FC = () => {
    const [items, setItems] = useState<Item[]>()
    const {answer, itemsCount, questionAnimation} = useAppSelector((state: RootState) => state.question)
    const level = useAppSelector(levelSelector)
    const scores = useAppSelector(scoresSelector)
    const bonus = useAppSelector(bonusSelector)
    const questionRef = useRef<HTMLDivElement>(null)
    
    const {increaseLevel, decreaseLevel, setScores, increaseBonus, decreaseBonus, increaseAnswersCount, increaseCorrectAnswersCount, checkTimer} = useActionCreators(statisticsSliceActions)
    const {setAnswerAnimation, setQuestionAnimation, rerenderAnswer, setItemsCount} = useActionCreators(questionSliceActions)
  
    useEffect( () => {
      const itemsForInserting = []
  
      const values = []
      let length = 1

      if (level === 2) {
        length = 2
      } else if (level > 2 && level < 7) {
        length = 3
      } else if (level >= 7) {
        length = 4
      }


      while(values.length < itemsCount) {
        const r = getRandomAnswer(length);
        if(values.indexOf(r) === -1 && r !== answer) values.push(r);
      }
      
      values[getRandomInt(itemsCount)] = answer
  
      for (let i = 0; i < itemsCount; i++) {
        itemsForInserting.push({
          value: values[i],
          color: colors[getRandomInt(6)],
          animation: level < 3 ? '' : animations[getRandomInt(4)]
        })
      }
  
      setItems(itemsForInserting)
    }, [answer])

    useEffect(() => {
      if (questionAnimation) {
        questionRef.current?.classList.remove('ng-leave')
        questionRef.current?.classList.add(questionAnimation)
      }
    }, [questionAnimation])

    const answerHandler = (value: number) => {
      setAnswerAnimation('ng-leave')
      setQuestionAnimation('ng-leave')
      increaseAnswersCount()

      setTimeout(() => {
        setAnswerAnimation('ng-enter')
        setQuestionAnimation('ng-enter')

        if (value === answer) {
          increaseCorrectAnswersCount()
          increaseLevel()
          setScores(scores + 42 * bonus)
          increaseBonus()
          rerenderAnswer(level + 1)
          setItemsCount(level + 1)
        } else {
          decreaseLevel()
          decreaseBonus()
          rerenderAnswer(level - 1)
          setItemsCount(level - 1)
        }

        checkTimer()
      }, 300)
    }

    let width = 'item-width-3'
    if ([12, 16].includes(itemsCount)) width = 'item-width-4'
    if ([25].includes(itemsCount)) width = 'item-width-5'

  return (
    <div ref={questionRef} className={cn("items-field", width)}>
        {items && items.map((item, i) => 
          <button 
            key={i}
            className={cn(
              "item", 
              `item--${item.color}`, 
              ['', 'scale', 'blink'].includes(item.animation) ? item.animation : ''
            )}
            onClick={() => answerHandler(item.value)}
          >
            <span className={item.animation === 'rotate' ? 'rotate' : ''}>{item.value}</span>
          </button>
        )}
        </div>
  )
}

export default Field