import React ,{useState} from 'react'
import axios from 'axios';

export default function AddPost() {

    const [user, setuser] = useState({
        email:'' ,content:''
    })

   const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setuser({...user ,[name]:value});
   }

   const add_post = async(e)=>{
    e.preventDefault();
    console.log("testing add post");
    try {
       const {email,content} = user;

        const res = await axios.post('/addpost' ,{
                email ,content
        }) 
        console.log(res);
        if(!res){
            console.log("wrong credentials...");
        }
        else{
            window.alert("registerd successfully")
           // history.push('/login')
            
        } 
        console.log(res);
        
    } catch (error) {
        window.alert("something went wrong ")
        console.log(error);
    }
   }


    return (
        <>
        <div>
            <h1 className='text-center'>write  about your post here</h1>
        </div>
    <div className='container shadow p-5'>

        <div className="form-group mt-5">
           <label htmlFor="email">
               <i className="fas fa-envelope"></i>
           </label>
           <input type="email"  className="input" onChange={handleChange} value={user.email} placeholder=" your registered email  " id="email" name="email"/>
        </div>
        <div className='row my-4'>
            <textarea rows='10' cols='50' onChange={handleChange} value={user.content}  name='content'></textarea>
        </div>
        <div className='row my-4'>
           <button type='submit' className='btn btn-primary' onClick={add_post}>upload</button>
        </div>
    </div>             
        </>
    )
}
