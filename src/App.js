import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
 
const App = () => {

  const purple="yellow";

  const [bg,setBg]=useState(purple);
  const [name,setName]=useState("Click me");
  const [cname,setbcName]=useState("Back Color");

  

  const bgchange = (a) => {

    let newcolor= a ==='leave'? "green":'blue';
    setBg(newcolor); 
    setName("❤️❤️❤️❤️");
  }
  const bgback =()=>{
    let backcolor="pink";
    setBg(backcolor);
    setbcName("😄😄😄😄");
  }



  return (
    <div  style={{backgroundColor:bg}}>
     <button onClick={bgchange}>{name}</button>
     <button onDoubleClick={bgback}>{cname}</button>
     <button onMouseEnter={bgchange} >mouse Enter</button>
     <button onMouseLeave={()=>bgchange("leave")}>mouse leave</button>

     
    </div>
  );
}

export default App;
  