import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getTask } from '../actions/taskAction'
import InputComponent from '../components/InputComponent'

function Task() {

  const [list, setList] = useState(true);
  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.task)

  useEffect(() => {
    dispatch(getTask())
  }, [dispatch])

  return (
    <div className="row">


      <div className="col s12">

        {
          list ? (


            <div>
              <div className="task-box">
                {
                  tasks.map(task => (
                    <li key={task.id}>
                      <h2>{task.title}</h2>
                    </li>
                  ))
                }

              </div>

              <i className="material-icons">add</i><span>Add Task</span>
            </div>
          ) : <InputComponent />
        }



      </div>
    </div>
  );




}

export default Task;
