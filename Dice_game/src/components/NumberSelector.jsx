
import styled from "styled-components"

function NumberSelect({numberSelectoin, setNumberSelectoin,error}) {
    const array = [1, 2, 3, 4, 5, 6]
   
    return (
        <Container>
            <span className="error">{error}</span>
            <div className="flex">
                {array.map((value, i) => <Box
                    isSelected={value === numberSelectoin}
                    key={i}
                    onClick={() => setNumberSelectoin(value)}
                >{value}</Box>)}
            </div>
            <p>Select Number</p>
        </Container>
    );
}
export default NumberSelect

const Box = styled.div`
    border: 2px solid black;
    height: 72px;
    width: 72px;
    border-radius: 5px;
    display: grid;
    place-items: center;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "blakc")};
    margin-top: 40px;
    margin-right: 30px;
`;
const Container = styled.div`
    .flex{
        display: flex;
        gap: 15px;
       
    }
    p{
        font-size: 24px;
        font-weight: 500px;
        padding: 20px;
        display: flex;
        justify-content: flex-end;
        margin-right:40px;
    }
    .error{
        color: red;
        font-size:30px;
        font-weight: bolder;
    }
`;