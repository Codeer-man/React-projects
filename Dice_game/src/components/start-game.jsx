
import styled from 'styled-components'


const start_game = ({toggle}) => {
    return (
        <Container>
            <div className="contain">
                <div className="left-side">
                    <img src="./img/dices.png" />
                </div>
                <div className="right-side">
                    <h1>DICE GAME</h1>
                    <button onClick={toggle}>Play Now</button>

                </div>
            </div>

        </Container>
    )
}

export default start_game

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
.contain{
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap :50px ;
    
}
img{
    height: 80%;
    width: 90%;
    /* position: fixed; */
}
button{
    background-color: black;
    color: white;
    font-size: 18px;
    padding: 10px;
    width: 190px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: 0.3s ease-in;

    &:hover{
        background-color: white;
        color: black;
        transition: 0.4s ease-in;
        border: 1px solid;
        outline-color: transparent;
        font-weight: 500;
    }   
}
h1{
   white-space: nowrap;
    font-size: 96px;
}
`;
