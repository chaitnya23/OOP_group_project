import React ,{useEffect ,useState} from 'react'
import SingalAlumini from './SingalAlumini'
import {useHistory } from 'react-router-dom';

import axios from 'axios'

export default function Aluminies() {

    const [aluminies, setaluminies] = useState([])
    const history = useHistory();

    const getUser = async()=>{
        try {
            const res = await axios.get('/aboutuser' ,{
                withCredentials:true
            })
    
            if(!res){
              window.alert('log in first...');
                history.push('/login');
            }
            
    
        } catch (error) {
          window.alert('log in first...');
          history.push('/login');
            console.log(error);
        }
    };
    
    const getAluminies = async()=>{
        try {
            const {data} = await axios.get('/getposts');
         
            setaluminies(data);
        } catch (error) {
            console.log(error.message);
            window.alert("cheack you are logged in first !!!!")
            history.push('/login');
        }
    }
    useEffect(() => {
        getUser();
        getAluminies();
    }, [])
    return (
        <>
            <div className="container">
            <div className="row my-3">
            <h1>---Our Aluminies---</h1>
            </div>
                <div className="row">
                    {
                        aluminies.map((ele ,idx)=>{
                           return <SingalAlumini key={idx} name={ele.name} email={ele.email} company={ele.company} placed_as={ele.placed_as} package_={ele.package}/>
                        })
                    }
                </div>
            </div>
            
        </>
    )
}

