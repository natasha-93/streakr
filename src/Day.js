import React, { useState } from 'react';
import { format } from 'date-fns';

function Day({ date }) {
  const [tasks, setTasks] = useState([
    {
      label: "Learn React",
      isComplete: false
    },
    {
      label: "Pool Party",
      isComplete: false
    }
  ])
  const allComplete = tasks.every((task) => task.isComplete)
  return (
    <div style={{ width: "10rem", height: "10rem", border: "1px solid black", margin: "1rem", padding: "1rem", background: allComplete ? "#40cc3d" : "white" }}>
      {format(date, 'dd MMMM yyyy')}
      {tasks.map((task, index) => {
        return <div key={index}>
          <input value={task.isComplete} type="checkbox" id={`${date.getTime()}-${index}`} onChange={e => {
            const newTasks = [...tasks]
            newTasks[index].isComplete = !task.isComplete
            setTasks(newTasks)
          }} />
          <label htmlFor={`${date.getTime()}-${index}`} >{task.label}</label>

        </div>
      })}
    </div>
  );
}

export default Day;
