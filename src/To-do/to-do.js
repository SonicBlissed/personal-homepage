import "./to-do.css";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";

const initialState = false;

function Todo() {
  const [done1, setDone1] = useState(initialState);
  const [done2, setDone2] = useState(initialState);
  const [done3, setDone3] = useState(initialState);

  const taskArray = ["Finish Project", "Get A Job", "DB For Clicker"];


 function disabledHelper1() {
   if (done1 === true){
       setDone1(false)
   } else {
       setDone1(true)
   }
 }
 function disabledHelper2() {
    if (done2 === true){
        setDone2(false)
    } else {
        setDone2(true)
    }
  }
  function disabledHelper3() {
    if (done3 === true){
        setDone3(false)
    } else {
        setDone3(true)
    }
  }
  function resetHelper() {
      if (done1 === true || done2 === true || done3 === true){
          setDone1(false)
          setDone2(false)
          setDone3(false)
      } else {
          return null
      }
  }



  return (
    <div className="box">
      <Fade bottom delay={200} cascade distance={"60%"}>
        <h1>To-Do List</h1>
        <div className="inner-box">
          <Button
            className="button"
            onClick={disabledHelper1}
            variant="contained"
            color="secondary"
            size="large"
            disabled={done1}
          >
            {taskArray[0]}
          </Button>
          <Button
            className="button"
            onClick={disabledHelper2}
            variant="contained"
            color="secondary"
            size="large"
            disabled={done2}
          >
            {taskArray[1]}
          </Button>
          <Button
            className="button"
            onClick={disabledHelper3}
            variant="contained"
            color="secondary"
            size="large"
            disabled={done3}
          >
            {taskArray[2]}
          </Button>

        </div> </Fade>

        <Fade bottom delay={400} cascade distance={"20%"}>

        <div className='bottom-box'>
        <Button
            className="button"
            onClick={resetHelper}
            variant="contained"
            color="secondary"
            size="large"
            
            >
            Reset List
          </Button>
        </div>
              </Fade>
     
    </div>
  );
}

export default Todo;
