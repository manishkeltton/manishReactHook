import React from 'react'
import { FcApprove } from "react-icons/fc";

const GithubUser = (props) => {
    return (
        <>
        <h2><center>List of Github Users</center></h2>
        <div className="container-fluid mt-5">
            <div className="row text-center">
                {
                    props.users.map((curElem)=>{
                        return(
                            <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                                <div class="card p-2">
                                    <div className="d-flex align-items-center">
                                        <div class="image"><img src={curElem.avatar_url} class="rounded" width="155"/></div>
                                            <div class="ml-3 w-100">
                                                <h4 class="mb-0 mt-0 textLeft">{curElem.login} <FcApprove /></h4> <span className="textLeft">{curElem.title}</span>
                                                <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div class="d-flex flex-column"> <span class="articles">Articles</span> <span class="number1">38</span></div>
                                                    <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number1">980</span></div>
                                                    <div class="d-flex flex-column"> <span class="rating">Rating</span> <span class="number1">8.9</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }
                
            </div>
        </div>
    </>
    )
}

export default GithubUser
