import { useReducer } from "react"

const initialState = {
  number1 : 0,
  number2 : 0,
  result : "no result yet"
}

function reducer (state = initialState, action) {
  switch(action.type) {
    case "updateNumber1":
      return {...state, number1 : action.number}
    case "updateNumber2":
      return {...state, number2 : action.number}
    case "+":
      return {...state, result : (state["number1"] + state["number2"])}
    case "-":
      return {...state, result : (state["number1"] - state["number2"])}
    case "c":
      return initialState
    default:
      throw new Error();
  }
}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type : "updateNumber1", number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type : "updateNumber2", number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({type : "+"})}>+</button>
        <button onClick={() => dispatch({type : "-"})}>-</button>
        <button onClick={() => dispatch({type : "c"})}>c</button>
      </div>
      <div><h2>Result: {state.result}</h2></div>
    </div>
  )
}
