import styled from 'styled-components'

const diceRole = () => {
  return (
    <DiceContainer>
      <div>
         <img src="./img/dice/dice_1.png" alt="Dice picture" />
      </div>
        <p>Click on dice to roll</p>
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
   
`;