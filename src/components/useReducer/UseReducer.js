import React, { useReducer, useState } from 'react'

const initialState = 0;
const reducer = (state, action) =>{
      console.log(state, action);
      if(action.type === "INCREMENT") {
        return state+1;
      }else{
          return state-1;
      }
}

const UseReducer = () => {
    //const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({type: "INCREMENT"})}>inc</button><br />
            <button onClick={() => dispatch({type: "DECREMENT"})}>dec</button>
        </div>
    )
}

export default UseReducer
