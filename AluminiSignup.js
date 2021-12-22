import React ,{useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function AluminiSignup() {

    const [userData, setuserData] = useState({
        name:"",email:"",company:"",placed_as:"",package:""
    })

    const handleChange =(e)=>{
        const fieldname = e.target.name;
        const value = e.target.value;

        setuserData({...userData ,[fieldname]:value});
    }

    const postData = async()=>{

        try {
            
            
            const res = await axios.post('/aluminisignup' ,userData);
            if(res.status!=404){
                window.alert('registered successfull');

            }
            else{
                window.alert('error');

            } 
        } catch (error) {
            window.alert('error in registering try again later');
            
        }
    }

    return (
        <div>
        <section className="signup d-flex justify-content-center">
        <div className="container signup-box-2 p-2 px-4 shadow-lg">
            <div className="row my-2">
                <h1 className="signup-tital">Register as alumini</h1>
            </div>
            <div className="row signup">
                <div className="row  ">
   

                        <div className="form-group mt-5">
                            <label htmlFor="name">
                                <i className="fas fa-user"></i>
                            </label>
                            <input type="text" onChange={handleChange} value={userData.name} className="input" placeholder="   Name" id="name" name="name"/>
                        </div>

                        <div className="form-group mt-5">
                            <label htmlFor="email">
                                <i className="fas fa-envelope"></i>
                            </label>
                            <input type="email" onChange={handleChange} value={userData.email} className="input" placeholder="   Email" id="email" name="email"/>
                        </div>

                        <div className="form-group mt-5">
                            <label htmlFor="company">
                                 <i className="fas fa-phone"></i>
                            </label>
                            <input type="text" onChange={handleChange} value={userData.company} className="input" placeholder="    company" id="company" name="company"/>
                        </div>

                        <div className="form-group mt-5">
                            <label htmlFor="placed_as">
                                <i className="fas fa-lock"></i>
                            </label>
                            <input type="text" onChange={handleChange} value={userData.placed_as} className="input" placeholder="  placed_as" id="placed_as" name="placed_as"/>
                        </div>

                        <div className="form-group mt-5">
                            <label htmlFor=" package">
                            <i class="fas fa-user-tie"></i>
                            </label>
                            <input type="number" onChange={handleChange} value={userData.package} className="input" placeholder="   package" id=" package" name="package"/>
                        </div>

                         
                        
                    </div>
                        
                </div>
                        <div className="row mt-3">
                            <button className="btn btn-dark " type="submit" onClick={postData} >sign up</button>

                        </div>
        </div>
    </section>
        </div>
    )
}
