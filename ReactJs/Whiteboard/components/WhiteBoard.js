import React, {useState } from 'react'

import './CSS/board.css'

const WhiteBoard = () => {
    const [chalk,setChalk]=useState("");
    const [notes,setNotes]=useState([])


    const handle_chalk=(e)=>{
        
        setChalk(e.target.value);

        

     

    }
    
    const handle_form=(e)=>{
        
        e.preventDefault();
       
        if(chalk===""){
          alert("provide value")
        }

        else{
        const arr=notes.slice()

        arr.push(chalk);
        setNotes(arr)


        setChalk("")

        }
        
    }
// refresh

const refresh=()=>{
     setNotes([])
}

    const noteslist=notes.map((item)=>{
        return(
              <li>
                 {item}
              </li>
        )
    })
  
    return (
      <div className='content'>
      <h2 style={{"padding":"20px"}}>WhiteBoard</h2>
        <form onSubmit={handle_form}>
          <input type="text" placeholder='enter text' value={chalk} onChange={handle_chalk}/>

           <input type='submit'></input>
        
        </form>
        
        <div className='board'>
            {chalk}
         </div>
         
         
         <ul className='noteslist'>
            
              {noteslist}
            </ul>

            <button onClick={refresh}>Referesh</button>

      
      </div>
     )
}

export default WhiteBoard;