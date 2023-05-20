import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"


const Level = () => {
  const level = useSelector((state: RootState) => state.statistics.level)

  return (
    <div className="header__block">
        <div className="block__text">
        Уровень
        </div>
        <div className="block__index">
        {level}
        {/* 1-9 */}
        </div>
    </div>
  )
}

export default Level