import React, { useState } from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newEntry, setNewEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();//It is prevent auto refresh html page
        const Entry = {email:email,password: password}
        setNewEntry([...newEntry, Entry])
        console.log(newEntry);
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
                   newEntry.map((curEl)=>{
                       return(
                           <div>
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
