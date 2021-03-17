import React, { useEffect } from 'react'

const useCustomHook = (countn) => {

    useEffect(()=>{
        console.log('Hello World');
        if(countn == 0){
            document.title = `Chats`
        } else{
            document.title = `Chats (${countn})`
        }
        
    },[countn]);
}

export default useCustomHook
