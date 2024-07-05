import { useEffect, useState } from "react";
import styled from "styled-components";
import Search from './components/Search/Search.jsx'

export const DATA_URL = "http://localhost:9000";


function App() {

  const [filterData, setFilterData] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [FilterBtn, setFilterBtn] = useState("all")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await fetch(DATA_URL);
        const json = await response.json();
        setFilterData(json)
        setData(json)
        setLoading(false)
      } catch (error) {
        setError("unable to load")
      }

    }
    fetchData();
  }, [])

  function searchFood(e) {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilterData(null)
    }

    const filter = data?.filter((food) => food.name.toLowerCase()
      .includes(searchValue.toLowerCase())
    );
    setFilterData(filter)
  }

  function filterFood(type) {
    if (type === "all") {
      setFilterData(data)
      setFilterBtn("all")
    }
    const filter = data?.filter((food) => food.type.toLowerCase()
      .includes(type.toLowerCase())
    );
    setFilterData(filter)
    setFilterBtn(type)
  }

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breackfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading...</div>

  return (
    <MainContainer>
      <TopContainer>
        <img src="./logo.png" alt="" />
        <input onChange={searchFood} type="text" placeholder="Search food....." />
      </TopContainer>
      <FilterContainer>
        {
          filterBtns.map((value) => <Button key={value.name} onClick={()=> filterFood(value.type)}>{value.name}</Button>)
        }
      </FilterContainer>

      <Search data={filterData} />

    </MainContainer>
  );

}
// 
export default App

const MainContainer = styled.div`
  background-color: black;
  min-height: 100vh;
  color: white;
  max-width: 100vw;
`;
const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 20vh;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  input{
    border: 2px solid red;
    
    outline: none   ;
    background-color: transparent;
    padding:13px;
    border-radius: 5px;
    min-width: 30%;
    color: white;
  }
  ::placeholder{
      color: white;
      font-size:15px;
  }
  @media ( 0 < width < 825px){
    flex-direction: column;
    height: 90px;
    padding-top: 10px;
    gap: 20px;
  }
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;
export const Button = styled.button`
  background-color: #FF4343;
  border-radius: 5px;
  border: none;
  color: white;
  padding: 6px 12px;
  cursor: pointer;

  @media ( 0< width < 825px){
   margin-top: 30px;
  }
`;
