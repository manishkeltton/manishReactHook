import React, { useState } from 'react'
import BasicForm from './components/forms/BasicForm';
import Uncontrolled from './components/forms/Uncontrolled';
import RulesHook from './components/RulesHook';
import ShortCircuitEval from './components/ShortCircuitEval';
import Test from './components/Test';
import ComA from './components/useContext/ComA';
import UseEffectAPI from './components/useEffect/UseEffectAPI';
import UseEffects1 from './components/useEffect/UseEffects1';
import UseEffects2 from './components/useEffect/UseEffects2';
import ReducerContext from './components/useReducer/ReducerContext';
import UseReducer from './components/useReducer/UseReducer';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';

const App = () => {

  //console.log(useState("Manish Kumar"));

  // let myfirstval = useState('Rudra')[0];
  // console.log(myfirstval);
  // var val = "Manis Kumar";

  const [myName,setmyName] = useState('Manish Kumar');

  const changeValue = () =>{
    // console.log(val);
    let inVal = myName;
    // if(inVal === 'Manish Kumar'){
    //   let val = "Rudra Sharma"; 
    //   setmyName(val);
    // } else {
    //   let val = "Manish Kumar";
    //   setmyName(val); 
    // }

   // (inVal === 'Manish Kumar') ? setmyName('Rudra Sharma') : setmyName('Manish Kumar');
  }

  console.log(myName);

  return (
    <div>
      {/* <h1>{ myName }</h1>
      <button onClick={changeValue}>Click Me</button>
      <RulesHook /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <ShortCircuitEval /> */}
      {/* <BasicForm /> */}
      {/* <UseEffects1 /> */}
      {/* <UseEffects2 /> */}
      {/* <UseEffectAPI /> */}
      {/* <Uncontrolled /> */}
      {/* <UseReducer /> */}
      {/* <ReducerContext /> */}
       {/* <ComA /> */}
      <Test />
    </div>
  )
}

export default App
