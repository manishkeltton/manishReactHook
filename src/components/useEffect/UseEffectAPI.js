import React, { useEffect, useState } from 'react'
import GithubUser from './github/GithubUser';
import Loading from './github/Loading';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () =>{
        try{
            console.log("Parameter")
            setLoading(false)
            const response = await fetch('https://api.github.com/users');
            setUsers(await response.json()); 
        }catch(error){
            setLoading(false)
            console.log("my error"+error);
        }
    }

    useEffect(()=>{
        getUsers();
    },[]);

    if(loading){
        console.log("Loading HII..")
        return <Loading />
    }

    return (
         <>
            <GithubUser users={users}/>
         </>
    )
}

export default UseEffectAPI
