import React ,{useState ,useContext} from 'react'
import loginImg from '../images/login.jpg'
import {NavLink ,useHistory } from 'react-router-dom';
import axios from 'axios';
import {Context} from '../App'
import {toast ,ToastContainer} from 'react-toastify'




export default function Login() {

    const {state ,dispatch} = useContext(Context);
    const history = useHistory()

    const [user, setuser] = useState({
        email:"",password:""
    });
    const handleChange = (e)=>{
        let name  = e.target.name
        let value = e.target.value

        setuser({...user ,[name]:value});
    }

    const cheackUser = async (e)=>{
        e.preventDefault();
        try {
            const {email ,password}  = user;

            const res = await axios.post('/signin' ,{
                email ,password
            })

           // console.log(res);
            if(res.status===200){
                window.alert("logged in successfully.... ")
                dispatch({type:"login"});
                history.push('/')
            }
            else{ 
                window.alert('wrong credencials try again!!')
                //toast.error('wrong credencials...' ,{position:'top-center'});              

            }
        } catch (error) {
            window.alert('wrong credencials!!')

            //toast.error('not connected to internet!!!!!' ,{position:'top-center'});   
            console.log(error.message);           

            
        }


    }
    return (
        <>
            <section className="login-sec mt-5">
                <div className="container login-box px-2 shadow-lg">
                    <div className="row">
                        <div className="col-sm img-box">
                            <img src={loginImg} alt="error" />
                        </div>
                        <div className="col-sm form-box-login">

                            <div className="row">
                                <h1 className="text-center">Log in</h1>
                            </div>
                          <form onSubmit={cheackUser} >
                            <div className="form-group mt-5">
                                    <label htmlFor="email">
                                        <i class="fas fa-envelope"></i>
                                    </label>
                                    <input type="email" className="input" value={user.email} placeholder="   Email"  onChange={handleChange} id="email" name="email"/>
                            </div>

                            <div className="form-group mt-5">
                                    <label htmlFor="password">
                                        <i class="fas fa-lock"></i>
                                    </label>
                                    <input type="password" className="input" value={user.password} placeholder="  Password" onChange={handleChange}  id="password" name="password"/>
                            </div>

                            <div className="row">

                                    <div className=" col-sm-4 form-group-submit mt-3">
                                        <input type="submit" className="btn btn-primary" value="Log in" />
                                    </div>
                                    <div className="col-sm-7  mt-4 ">
                                        <NavLink to="/signup">? not have an account</NavLink>
                                    </div>
                            </div>

                           </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer/>
        </>
    )
}
