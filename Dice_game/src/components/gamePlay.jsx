import ScoreCounter from "./scoreCounter";
import styled from "styled-components"
import NumberSelection from './NumberSelector.jsx'
import DiceRole from "./diceRole.jsx";
import { useState, } from "react";

function gamePlay() {

  const [numberSelectoin, setNumberSelectoin] = useState()
  const [diceRoll, setDiceroll] = useState(1)
  const [score, setScore] = useState(0)
  const [error,setError] = useState()
  
  function GenerateRandomNum(mini, max) {
   return(Math.floor(mini + Math.random() * max))
    // console.log(diceRoll)
    
    
  };
  function randomNum(){
    if(!numberSelectoin){
      setError("Select a number before rolling the dice")
      return
    }
    const RandomNum = GenerateRandomNum(1,6)
    setDiceroll((prev)=> RandomNum)

    if(RandomNum === numberSelectoin){
      setScore((s) => s +4)
    }else{
      setScore((S) => S-1)
    }
    setNumberSelectoin(undefined)
  }
  return (
    <Container>
      <div className="top_section">
        <ScoreCounter score={score} />
        <NumberSelection error={error} numberSelectoin={numberSelectoin} setNumberSelectoin={setNumberSelectoin} />
      </div>
      <DiceRole diceRoll={diceRoll}  randomNum={randomNum} />
    </Container>
  );
}
export default gamePlay

const Container = styled.div`
  .top_section{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    align-items: center;
  }
`;