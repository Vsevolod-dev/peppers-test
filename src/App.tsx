import './styles/App.scss';
import Header from './components/Header';
import Question from './components/Question';
import Field from './components/Field';
import BackgroundContainer from './components/BackgroundContainer';
import BeginContainer from './components/BeginContainer';
import { RootState, useAppSelector } from './redux/store';
import FinishContainer from './components/FinishContainer';

const App = () => {
  const gameStatus = useAppSelector((state: RootState) => state.statistics.gameStatus)

  return (
    <>
      <div className='container'> 
        {gameStatus === 'unstarted' && <BeginContainer/>}
        {gameStatus === 'started' && 
          <>
            <BackgroundContainer/>
            <Header/>
            <Question/>
            <Field/>
          </>
        }
        {gameStatus === 'finish' && <FinishContainer/>}
      </div>
    </>
  );
}

export default App;
