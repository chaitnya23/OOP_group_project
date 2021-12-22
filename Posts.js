import React ,{useEffect ,useState} from "react";
import axios from "axios";
import Post from "./Post";
import { useHistory } from 'react-router';



export default function Posts() {

  const [userPosts, setuserPosts] = useState([])
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

  const getPosts = async()=>{
    try{
      const res = await axios.get('/getposts')

      if(!res){
        console.log("error... enter correct email!!!");
    }
    else{
      console.log(res)
      setuserPosts(res.data);
    }
    

    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    getUser();
    getPosts();
  }, [])

  return (
    <div>
      {userPosts.map((ele)=>{
        return <Post name={ele.name} company={ele.company} contents={ele.posts} placed_as={ele.placed_as}/>
      })}
    </div>
  );
}
