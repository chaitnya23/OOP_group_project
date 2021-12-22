import React from "react";
import SingalPost from "./SingalPost";

export default function Post({ name, contents, company,placed_as }) {
  return (
    <>
      
        
        {
            contents.map((e)=>{
                return <SingalPost name={name} placed_as={placed_as} company={company} content={e}/>
            })
        }
        

      
    </>
  );
}
