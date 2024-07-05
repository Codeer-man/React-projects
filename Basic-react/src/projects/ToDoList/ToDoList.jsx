import { useRef, useState } from 'react';
import Styled from './Style.module.css'

const ToDoList = () => {
  const ulRef = useRef(null);
  // const inputRef = useRef(null);
 const [input,setinput]=useState("")

  // function clicked(e) {
  //   if (e.target.tagName === 'li') {
  //     e.target.style.textDecoration = "line-through";
  //   }}

  function clicked(e) {
    e.target.style.textDecoration = "line-through";
  }
  function submit() {
    const ul = ulRef.current;
    const input = inputRef.current;
    
    const li= document.createElement('li')
    li.textcontent = input.value;
    ul.appendChild(li);
   
  }

  return (
    <div className={Styled.container}>
      <div className={Styled.box}>
        <h1>To-Do-List</h1>
        <div className={Styled.top}>
          <input type="text" placeholder='Write something here'  ref={inputRef}/>
          <button onClick={submit}>Add</button>
        </div>
        <ul onClick={clicked} className={Styled.list} ref={ulRef}>
          
        </ul>
      </div>
    </div>
  )
}

export default ToDoList


