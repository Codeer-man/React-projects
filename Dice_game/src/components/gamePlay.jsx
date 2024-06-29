import ScoreCounter from "./scoreCounter";
import styled from "styled-components"
import NumberSelection from './NumberSelector.jsx'
import DiceRole from "./diceRole.jsx";

function gamePlay() {

  return (
    <Container>
      <div className="top_section">
        <ScoreCounter />
        <NumberSelection />
        
        
      </div>
      <DiceRole/>
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