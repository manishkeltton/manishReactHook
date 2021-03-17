// 1.CONTEXT -> when to be passing data create Context.
// 2.PROVIDER -> Provider work like medium for passing data from one component to other component
// 3.CONSUMER -> it work for get data getting by provider.
// React’s useContext hook makes it easy to pass data throughout your app without manually passing props down the tree.  
// context API / useContext
import React, { createContext } from 'react'
import ComB from "./ComB"

const BioData = createContext();

const ComA = () => {
    return (
       <BioData.Provider value={"Rudra Sharma"}>
           <ComB />
       </BioData.Provider>
    )
}

export default ComA
export { BioData };



