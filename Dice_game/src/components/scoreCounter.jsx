import styled from "styled-components"

const ScoreCounter = ({score}) => {
    return (
        <Score>
            <nav>
                <h1>{score}</h1>
                <p>Total score</p>
            </nav>
        </Score>
    )
}

export default ScoreCounter

const Score = styled.div`
    nav{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    h1{
        font-size: 80px;
        max-width: 200px;
        text-align: center;
    }
    p{
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        max-width: 200px;
    }
`