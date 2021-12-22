import React ,{useEffect ,useContext} from 'react'
import {useHistory } from 'react-router-dom';
import {Context} from '../App'

import axios from 'axios';


export default function Logout() {

    const {state ,dispatch} = useContext(Context);

    const history = useHistory();

    const logoutUser = async()=>{
        console.log('test1');
        const res = await axios.get('/logoutuser' ,{
            withCredentials:true
        })
       
        dispatch({type:"logout"});
        history.push('/login');
    } 
    useEffect(() => {
        logoutUser(); 
    }, [])
    
    return (
        <>
            <h1>logging out....... </h1>
            
        </>
    )
}