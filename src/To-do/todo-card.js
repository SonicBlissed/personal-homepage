import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./to-do.css";

function TodoCard() {
  const taskArray = [
    { todo: "pancakes", completed: false, id: 1 },
    { todo: "cornflakes", completed: false, id: 2 },
    { todo: "bananas", completed: false, id: 3 },
  ];

  const [tasks, setTasks] = useState(taskArray);

  const toggleCompleted = id => {
    setTasks(tasks => tasks.map(task => {
      return task.id === id ? {
        ...task,
        completed: !task.completed
      } : task;
    }));
  };

  const resetList = () => {
      setTasks(tasks.completed = false)
  }



  return (
    <div>
      <h1>Testing</h1>
      {tasks.map((task) => {
          if(task.completed === false){
              return (
                <Button
                  className="button"
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={()=> toggleCompleted(task.id)}
                  key={task.id}
                  disabled={task.completed}
                >
                  {task.todo}
                </Button>
                
              );
          } else {
              return (
                <Button
                className="button"
                variant="contained"
                color="secondary"
                size="large"
                key={task.id}
                onClick={()=> toggleCompleted(task.id)}
              >
                Complete!
              </Button>
              )
          }
      })}
      
    </div>
  );
}
export default TodoCard;
// const initialState = false;
// const [done1, setDone1] = useState(false);
// const [done2, setDone2] = useState(false);
// const [done3, setDone3] = useState(false);
// const [button1, setbutton1] = useState(Lockr.get('task1'));
// const [button2, setbutton2] = useState(Lockr.get('task2'));
// const [button3, setbutton3] = useState(Lockr.get('task3'));
// const [edit, setEdit] = useState('edit');


// function handleInputTask1(evt) {
//   setbutton1(evt.target.value)
// }

// function handleInputTask2(evt) {
//   setbutton2(evt.target.value)
// }

// function handleInputTask3(evt) {
//   setbutton3(evt.target.value)
// }


// function disabledHelper1() {
//   if (done1 === false) {
//     setDone1(true);
//   } else {
//     setDone1(false);
//   }
// }
// function disabledHelper2() {
//   if (done2 === true) {
//     setDone2(false);
//   } else {
//     setDone2(true);
//   }
// }
// function disabledHelper3() {
//   if (done3 === true) {
//     setDone3(false);
//   } else {
//     setDone3(true);
//   }
// }
// function resetHelper() {
//   if (done1 === true || done2 === true || done3 === true) {
//     setDone1(false);
//     setDone2(false);
//     setDone3(false);
//   } else {
//     return null;
//   }
// }

// function editHelper () {
//     if (edit === 'edit') {
//         setEdit('editting')
//     } else {
//         setEdit('edit')
//         Lockr.set('task1', button1); 
//         Lockr.set('task2', button2);
//         Lockr.set('task3', button3);
//     }
// }



// return (
//   <div className="box">
//     <Fade bottom delay={200} cascade distance={"60%"}>
//       <h1>To-Do List</h1>
//       <TodoCard/>
//       <div className="inner-box">
//         <Button
//           className="button"
//           onClick={disabledHelper1}
//           variant="contained"
//           color="secondary"
//           size="large"
//           disabled={done1}
//         >
//           {Lockr.get('task1')}
//         </Button>
//         <Button
//           className="button"
//           onClick={disabledHelper2}
//           variant="contained"
//           color="secondary"
//           size="large"
//           disabled={done2}
//         >
//           {Lockr.get('task2')}
//         </Button>
//         <Button
//           className="button"
//           onClick={disabledHelper3}
//           variant="contained"
//           color="secondary"
//           size="large"
//           disabled={done3}
//         >
//           {Lockr.get('task3')}
//         </Button>
//       </div>
//     </Fade>

//     <Fade bottom delay={400} cascade distance={"20%"}>
//       <div className="bottom-box">
//         <Button
//           className="button"
//           onClick={resetHelper}
//           variant="contained"
//           color="secondary"
//           size="large"
//         >
//           Reset List
//         </Button>
//         <Button
//           className="button"
//           onClick={editHelper}
//           variant="contained"
//           color="secondary"
//           size="large"
//         >
//           Edit List
//         </Button>

//         <form className={edit}>
//             <input placeholder={button1} type='text' onChange={handleInputTask1}/>
//             <input placeholder={button2} type='text' onChange={handleInputTask2}/>
//             <input placeholder={button3} type='text' onChange={handleInputTask3}/>
//         </form>
//       </div>
//     </Fade>
//   </div>
// );