import styled from "styled-components";
import { DATA_URL } from "../../App";
import { Button } from "../../App";

const Search = ({ data }) => {


  return (
    <div>
      <CardContainer>
        <div className="bg-img">   </div>
        <Cards>
          {data?.map(({ image, name, text, price }) =>
            <Card key={name}>
              <div className="food-img">
                <img src={DATA_URL + image} />
              </div>
              <div className="food_info">
                <div className="food-name">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <div className="price">
                  <Button>{price.toFixed(2)}</Button>
                </div>
              </div>

            </Card>)}
        </Cards>


      </CardContainer>

    </div>
  )
}

export default Search

const CardContainer = styled.section`
  .bg-img{
    min-height: 70vh;
    background-image: url("./bg.png");
    background-size:cover;
    opacity: 0.5;
    position: absolute;
    width: 100%;
    background-repeat: repeat;
  }
`;
const Cards = styled.div`
    position: relative;
    z-index: 1;

    display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  
`;
const Card = styled.div`
   /* opacity: 1; */
  /* width:30%; */

  width: 400px;
  height: 160px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;