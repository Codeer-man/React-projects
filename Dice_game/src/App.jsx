
import { useState } from 'react';
import Start_game from './components/start-game';
import GamePlay from './components/gamePlay';

function App() {
  const [isGameStart,setGameStart] = useState(true)  
  
  function toggleGamePlay(){
    setGameStart((prev) =>!prev)
  }
  
  return(
      <div>
          {isGameStart ? <GamePlay/> : <Start_game  toggle={toggleGamePlay}/>}
          
      </div>
    )
}

export default App

