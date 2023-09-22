import React, { useState } from 'react'

const Login = () => {

    const [name,setName]=useState("")
    const [passsword,setPassword]=useState("")

const handle_name=(e)=>{
      setName(e.target.value)
      localStorage.setItem("Name",name);
}

const handle_password=(e)=>{
     setPassword(e.target.value);
     localStorage.setItem("Pass",passsword);

}
  
const handle_login=()=>
{
    setName("")
    setPassword("")

}
const handle_logout=()=>{
  
     localStorage.removeItem("Name");
     localStorage.removeItem("Pass");


}

//const pass=localStorage.getItem("Pass")
return (
    <div className='form'>
       
       <input type="text" placeholder='enter your name' onChange={handle_name} value={name}/>
       <input type="text" placeholder='enter passsword' onChange={handle_password} value={passsword}/>
       <button onClick={handle_login}>Login</button>

       {
        <p>Name is {localStorage.getItem("Name")}</p>
       }
      {
       <p>passsword is {localStorage.getItem("Pass")}</p>
      }


      <button onClick={handle_logout}>Logout</button>

      
     
     



    </div>


          )

  }

export default  Login;