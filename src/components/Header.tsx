import { FC } from "react";
import Timer from "./Statistics/Timer";
import Level from "./Statistics/Level";
import Scores from "./Statistics/Scores";
import Bonus from "./Statistics/Bonus";
import styles from '../styles/Header.module.scss'


const Header: FC = () => {
    return (
        <div className={styles.header}>
            <Timer/>
            <Level/>
            <Scores/>
            <Bonus/>
        </div>
    )
}

export default Header