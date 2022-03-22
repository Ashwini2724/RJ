import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


export default function Mygt() {
  //show greenting in everyday
  let curDate = new Date();
  curDate  =curDate.getHours();
  let greeting="";

  //inline css
  const cssstyle ={}    


  if(curDate >= 1 && curDate<12)
  {
    greeting="Good Morning";
    cssstyle.color="green";
  }else  if(curDate >=12 && curDate<19)
  {
    greeting ="Good Afternoon";
    cssstyle.color="orange";
  }else{
    greeting="Good Noght";
    cssstyle.color="red";
  }

  

  return (
      <>
      <div>

      <h1>Hello Sir/Mam, <span style={cssstyle}>{greeting}</span></h1>
      </div>

      </>
  )
}
