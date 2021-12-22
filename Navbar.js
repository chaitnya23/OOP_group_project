import {NavLink} from 'react-router-dom';
import React ,{useEffect ,useState ,  useContext} from 'react'
import axios from 'axios';
import {Context} from '../App'


function Navbar() {

  const {state ,dispatch} = useContext(Context);
  

  const [name, setname] = useState("")
    const getUser = async()=>{
            try {
                const res = await axios.get('/aboutuser' ,{
                    withCredentials:true
                })
              
                setname(res.data.name)
            } catch (error) {
                console.log(error);
            }
    };
 
    useEffect(() => {
       getUser();
    }, [])


    return (
    <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <div className="div">
      <h3 className="text-white">  IIIT-DWD</h3>
    </div>
    
    <div className=" navbar-box justify-content-end" >
      <ul className="navbar-nav ml-auto mr-2 ">
        <li className="nav-item  mx-1 px-1">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
         
        {!state ?  (
        <>
        <li className="nav-item mx-1 px-1">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item mx-1 px-1">
        <NavLink className="nav-link " to="/signup" >Sign Up</NavLink>
        </li>
        </>
        ) : (
        <li className="nav-item mx-1 px-1">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
        )}
         
       
      </ul>
      
    </div>
  </div>
</nav>
    </>
    )
}

export default Navbar;
