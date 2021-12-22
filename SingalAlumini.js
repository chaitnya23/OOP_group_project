import React ,{ useEffect ,useState} from 'react';
import profileImg from '../images/profile.jpeg'
import axios from 'axios';
import {useHistory} from 'react-router-dom';



function SingalAlumini({name ,email ,company ,placed_as , package_}) {

    return (
    <>
        <div className="container profile-box shadow-lg p-2 mt-4 px-3">
           
            <div className="row main">
                <div className="col-3 profile ">
                   <img src={profileImg} alt="" />
                </div>
                <div className="col">
                    <div className="edit"> 
                       <h5>{name}</h5>
                       <h6 style={{"color":"green"}} className=" mt-4">{placed_as}</h6>
                    </div>
                </div>
            </div>
            <div className="row user-info ">
                

                <div className="row mt-3">
                    <div className="col-4">
                        <h5>email</h5>
                    </div>
                    <div className="col  g">
                        <h6>{email}</h6>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-4">
                        <h5>Company</h5>
                     </div>
                    <div className="col  g ">
                        <h5>{company} </h5>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-4">
                        <h5>package</h5>
                     </div>
                    <div className="col  g ">
                        <h5>{package_}</h5>
                    </div>
                </div>

               
            </div>
        </div>    
    </>
    )
}

export default SingalAlumini
