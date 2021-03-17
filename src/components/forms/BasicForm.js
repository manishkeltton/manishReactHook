import React, { useState } from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();//It is prevent auto refresh html page
        if(email && password){
            const newEntry = { id: new Date().getTime().toString(), email:email, password:password }
            // const newEntry = { id: new Date().getTime().toString(), email, password }
            setAllEntry([...allEntry, newEntry])
            console.log(allEntry);
            setEmail("");
            setPassword("");
        }else {
            alert("Fill the Data")
        }
    }

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" autoComplete="off"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            <div>
                {
                   allEntry.map((curEl)=>{
                       //const { id, email, password } = curEl
                       return(
                           <div key={curEl.id}>  
                               <p>{curEl.email}</p>
                               <p>{curEl.password}</p>
                           </div>
                       )
                   })

                }
            </div>

        </>
    )
}

export default BasicForm
