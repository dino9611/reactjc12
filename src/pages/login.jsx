import React,{useEffect,useState} from 'react';
import querystring from 'query-string'
import {Redirect} from 'react-router-dom'

const Login =(props)=>{
    console.log(props.match.params.id)
    console.log(querystring.parse(props.location.search))
    const [kondisi]=useState(false)
    

    if(kondisi){
        return(
            <Redirect to='/register'/>
        )
    }
    return(
        <div>
            ini login
        
        </div>
    )
}



export default Login