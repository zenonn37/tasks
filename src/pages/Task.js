import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
//import { getTask } from '../actions/taskAction'
import { getProject } from '../actions/project.action'
//import { loadingAction } from '../actions/base_Action'
import InputComponent from '../components/InputComponent'


function Task() {

  const [list, setList] = useState(true);
  const dispatch = useDispatch();
  //const { tasks } = useSelector(state => state.task);
  const { current } = useSelector(state => state.project);
  const { tasks } = useSelector(state => state.project.current);
  if (tasks === undefined) {
    console.log('wait..');

  } else {
    console.log(tasks.length);

  }



  const { loading } = useSelector(state => state.base);

  useEffect(() => {
    dispatch(getProject())
  }, [dispatch])
  console.log(loading);

  const onTest = () => {
    console.log('from child');
    setList(true)

  }

  return (
    <div className="row">

      {
        loading ? "loading" : (

          <div className="col s12">

            {
              list ? (


                <div>
                  <div className="task-box">
                    <h2>{current.name}</h2>
                    {tasks === undefined ? "loading" : tasks.map(task => (
                      <li key={task.id}>{task.title}</li>
                    ))}
                    {/* {
                      tasks.map(task => (
                        <li key={task.id}></li>
                      ))
                    } */}
                  </div>


                </div>
              ) : <InputComponent id={current.id} onSubmit={onTest} />
            }



            <div>  <i className="material-icons" onClick={() => setList(!list)}>add</i><span>Add Task</span></div>
          </div>

        )
      }




    </div>
  );




}

export default Task;
