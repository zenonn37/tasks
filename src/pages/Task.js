import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getTask } from '../actions/taskAction'
import { loadingAction } from '../actions/base_Action'
import InputComponent from '../components/InputComponent'

function Task() {

  const [list, setList] = useState(true);
  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.task);
  const { loading } = useSelector(state => state.base);

  useEffect(() => {
    dispatch(getTask())
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
                    {
                      tasks.map(task => (
                        <li key={task.id}>
                          <h2>{task.title}</h2>
                        </li>
                      ))
                    }

                  </div>


                </div>
              ) : <InputComponent onSubmit={onTest} />
            }



            <div>  <i className="material-icons" onClick={() => setList(!list)}>add</i><span>Add Task</span></div>
          </div>

        )
      }




    </div>
  );




}

export default Task;
