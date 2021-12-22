import React ,{useEffect ,useState} from 'react'
import jobImg from '../images/job.jpg'
import axios from 'axios';
 
export default function Home() {

   
    const getUser = async()=>{
            try {
                const res = await axios.get('/aboutuser' ,{
                    withCredentials:true
                })
      
            } catch (error) {
                console.log(error);
            }
    };

    //useEffect(() => {
      // getUser();
   // }, [])

   
    return (
        <>
            <div className='container-fluid main-home-header '>
                <div className='row main-home'>
                  
                </div>
                <div className='row tital-header position-absolute '>
                  <h1>IIIT Dharwad...</h1>
                  <div className="row">
                        <h2>Lets Build the the future together....</h2>
                  </div>
                </div>
            </div>
            <div className="container my-5 tital-mid">
                <div className="row">
                    <h2>Connect with our Large Alumini network...</h2>
                    <h2>Get the information about the placement from our top aluminies who are already working in
                    your dream company
                    </h2>
                </div> 
            </div>
            <div className="container home-info-box my-2 ">
                <div className="row py-3 shadow  my-5">
                    <div className="col-3">
                        <img src={jobImg} alt='#' />
                    </div>
                    <div className="col-9">
                        <h3>register yourself here.. if you are an alumini of this institute and not registered </h3>
                        <a href="/alumaniSignup" className="btn btn-dark">Register</a>
                    </div>
                </div>
                <hr />
                <div className="row py-3 shadow my-5">
                    <div className="col-9">
                        <h3>read all the placement related posts and info about industries from our collage aluminies 
                         </h3>
                        <a href="/posts" className="btn btn-dark">Read here</a>
                    </div>
                    <div className="col-3">
                        <img src={jobImg} alt='#' />
                    </div>
                </div>

                <hr />

                <div className="row py-3 shadow my-5">
                    <div className="col-3">
                        <img src={jobImg} alt='#' />
                    </div>
                    <div className="col-9">
                        <h3>if you are already registered alumini then add your email and upload the post 
                        here...
                         </h3>
                        <a href="/addPost" className="btn btn-dark">add post</a>
                    </div>
                </div>

                <hr />

                <div className="row py-3 shadow my-5">
                <div className="col-9">
                    <h3>see all the previous registered aluminies  
                    here...
                     </h3>
                    <a href="/aluminies" className="btn btn-dark">see</a>
                </div>
                    <div className="col-3">
                        <img src={jobImg} alt='#' />
                    </div>
                </div>

            </div>
            
           
        </>
    ) 
}
