
import { useState } from 'react'
import styled from 'styled-components'

const diceRole = ({ diceRoll, randomNum }) => {
  const [rule, setRule] = useState()
  const [hide, setHide] = useState()

  function Click_rule() {
    setRule("Please select a number before rolling the dice. If the nice number and selected number is same you will get 4 points otherwise you will lose 1 points. Good Luck!")
    if (!setHide) { hide }
  }
  //  console.log(diceRoll)

  return (
    <DiceContainer>
      <div onClick={randomNum}>
        <img src={`./public/img/dice/dice_${diceRoll}.png`} alt="Dice picture" />
      </div>
      <p>Click on dice to roll</p>

      <button onClick={Click_rule}>Rules</button>
      <p setHide={hide} className='rule'>{rule}</p>
    </DiceContainer>
  )
}

export default diceRole

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top:50px; 
    align-items: center;
   img{
    cursor: pointer;
   }
   button{
    background-color: white;
    border: 3px solid black;
    outline-color: transparent;
    padding: 10px;
    width: 15%;
    border-radius: 5px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 30px;
   }
    .rule{
    
      width: 30%;
      padding: 10px;
      box-shadow: ${(props) => props.Hide ? " 0 2px 5px grey" : ""};
    } 
`;