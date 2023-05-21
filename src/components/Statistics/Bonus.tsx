import { RootState, useAppSelector } from "../../redux/store"
import cn from "classnames"
import styles from '../../styles/Header.module.scss'


const Bonus = () => {
    const bonus = useAppSelector((state: RootState) => state.statistics.bonus)

    return (
        <div>
            <div className={styles.text}>
                Бонус
            </div>
            <div className={styles.value}>
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