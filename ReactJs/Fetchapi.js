import React, { useEffect, useState } from 'react'

const Display = () => {

 const [data,setData]=useState([]);
 const [isloading,setIsloading]=useState(true)

async   function  getData(){

  try{

    const response=await fetch(`https://dummyjson.com/products`)
    
    if(!response.ok){
        throw new Error(`HTTP  error ${response.status}`)
    }
    const data=await response.json();
    setData(data.prouducts);
    setIsloading(false);


  }
  catch(error){
     console.log('error is',error)
  }


    
   }

    useEffect(()=>{
         getData();
    },[])

  return (
    <ul>
      {
        !isloading?
        (data.map((item)=>{
            return(

            <div key={item.id}>
              <li>{item.id}</li>
              <li>{item.title}</li>
            </div>    
            );
        })
        ):
         <h2>data is loading......</h2>
      }
    
    </ul>
  )
}

export default Display;
