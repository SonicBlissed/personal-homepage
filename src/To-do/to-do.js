import "./to-do.css";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";

function Todo() {
  const taskArray = [
    { todo: "Get Job", completed: false, id: 1 },
    { todo: "Buy A Tesla", completed: false, id: 2 },
    { todo: "Move Out", completed: false, id: 3 },
  ];
  const initialValues = [
    {
      todo: "",
      completed: false,
      id: 0,
    },
  ];
  const [add, setAdd] = useState("add");
  const [tasks, setTasks] = useState(taskArray);
  const [formValues, setFormValue] = useState("");

  function handleInputTodo(e) {
    setFormValue(e.target.value);
  }

  function onClickAdd() {
    if (add === "adding") {
      let copy = [...tasks];
      copy = [
        ...copy,
        {
          todo: formValues,
          completed: false,
          id: tasks.length + 1,
        },
      ];
      if (formValues === "") {
        setAdd("add");
      } else {
        setTasks(copy);
        setFormValue("");
      }
    } else {
      setAdd("adding");
    }
  }

  function onClickClear() {
    setTasks(initialValues);
  }

  const toggleCompleted = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        return task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task;
      })
    );
  };

  return (
    <div className="box">
      <Fade bottom delay={200} cascade distance={"60%"}>
        <h1>To-Do List</h1>
        <div className="inner-box">
          {tasks.map((task) => {
            if (task.todo === "") {
              return <div className="buttonDelete"></div>;
            } else {
              if (task.completed === false) {
                return (
                  <Button
                    className="button"
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => toggleCompleted(task.id)}
                    key={task.id}
                  >
                    {task.todo}
                  </Button>
                );
              } else {
                if (task.todo === "") {
                  return <div className="buttonDelete"></div>;
                } else {
                  return (
                    <Button
                      className="button"
                      variant="contained"
                      color="secondary"
                      size="large"
                      key={task.id}
                      onClick={() => toggleCompleted(task.id)}
                    >
                      Complete!
                    </Button>
                  );
                }
              }
            }
          })}
        </div>
      </Fade>
      <Fade bottom delay={400} cascade distance={"20%"}>
        <div className="bottom-box">
          <Button
            className="button"
            variant="contained"
            color="secondary"
            size="large"
            onClick={onClickClear}
          >
            Clear
          </Button>
          <Button
            className="button"
            variant="contained"
            color="secondary"
            size="large"
            onClick={onClickAdd}
          >
            Add todo
          </Button>

          <form className={add}>
            <input
              placeholder="What's next?"
              value={formValues}
              type="text"
              onChange={handleInputTodo}
            />
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Todo;
