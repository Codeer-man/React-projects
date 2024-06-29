import { useState } from 'react'
import Styles from './Calculator.module.css'

const calculator = () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const operator = ["+", "-", "/", "*", ".", "="]
  const [numWritter, setNumWritter] = useState('')

  const [result, setResult] = useState()


  function writtingNum(value) {
    if (value == '=') {
     try{ setResult(eval(numWritter))}  
     catch(e){
      setResult("error")
     }
    }
    //  else if (numWritter == "") {
    //   setNumWritter("write a number")
    // } 
    else {
      setNumWritter((prev) => prev + value)
    }
  }
  function reset(){
    setNumWritter("")
    setResult(null)
  }
  return (

    <div className={Styles.container}>
      <p> Expressin: {numWritter}</p>
      <p>Result: {result}</p>
      <div className={Styles.num}>
        {array.map((value, i) => <div
          onClick={() => writtingNum(value)}
          key={i}
          className={Styles.box}>{value}</div>)}

        {operator.map((value, i) => <div
          onClick={() => writtingNum(value)}
          key={i}
          className={Styles.box}>{value}</div>
        )}
      </div>
        <button onClick={reset}>reset</button>
    </div>

  )
}

export default calculator


// import { useState } from 'react'
// import Styles from './Calculator.module.css'

// const Calculator = () => {
//   const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//   const operator = ["+", "-", "/", "*", ".", "="]
//   const [numWritter, setNumWritter] = useState('')

//   const [result, setResult] = useState(null)

//   function writtingNum(value) {
//     if (value === "=") {
//       try {
//         setResult(eval(numWritter)) // Calculate result (eval should be used cautiously)
//       } catch (e) {
//         setResult("Error")
//       }
//     } else {
//       setNumWritter((prev) => prev + value)
//     }
//   }

//   return (
//     <div className={Styles.container}>
//       <p>Expression: {numWritter}</p>
//       <p>Result: {result !== null ? result : ""}</p>
//       <div className={Styles.num}>
//         {array.map((value, i) => (
//           <div
//             onClick={() => writtingNum(value)}
//             key={i}
//             className={Styles.box}
//           >
//             {value}
//           </div>
//         ))}
//         {operator.map((value, i) => (
//           <div
//             onClick={() => writtingNum(value)}
//             key={i}
//             className={Styles.box}
//           >
//             {value}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Calculator
