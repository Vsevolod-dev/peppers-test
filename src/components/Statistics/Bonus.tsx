import { RootState, useAppSelector } from "../../redux/store"
import cn from "classnames"


const Bonus = () => {
    const bonus = useAppSelector((state: RootState) => state.statistics.bonus)

    return (
        <div className="header__block">
            <div className="block__text">
            Бонус
            </div>
            <div className="block__index">
            {[...Array(5)].map((_, i) => 
                <span 
                key={i} 
                className={cn('bonus-round', i < bonus ? 'bonus-round--active' : '')}
                ></span>
            )}
            <span>x{bonus}</span>
            </div>
        </div>
    )
}

export default Bonus