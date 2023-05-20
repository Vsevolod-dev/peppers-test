import { FC } from "react";
import Timer from "./Statistics/Timer";
import Level from "./Statistics/Level";
import Scores from "./Statistics/Scores";
import Bonus from "./Statistics/Bonus";


const Header: FC = () => {
    return (
        <div className='header'>
            <Timer/>
            <Level/>
            <Scores/>
            <Bonus/>
        </div>
    )
}

export default Header