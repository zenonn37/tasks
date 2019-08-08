import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newTask } from '../actions/taskAction'
import moment from 'moment'





const InputComponent = () => {

    const dispatch = useDispatch();
    //task data
    const [task, setTask] = useState("");
    const [note, setNote] = useState("");
    const [priority, setPriority] = useState("Low Priority");
    const [schedule, setSchedule] = useState("2019-08-07 14:52:21");
    const [hide, setHide] = useState(false);
    //note visiabilty


    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: task,
            notes: note,
            priority: priority,
            due_date: schedule,
            ui_date: Date.now(),
            project_id: 1

        }

        dispatch(newTask(data));

        console.log(data);



    }

    // const handleNotes = () => {
    //     console.log('clicked');

    //     setHide(!hide);
    // }


    return (
        <div className="spacing-content">
            <form onSubmit={onSubmit}>

                <div className="row">
                    <div className="input-field col s12">
                        <input id="task" data-length="50" name="Task" type="text" onChange={e => setTask(e.target.value)} />
                        <label htmlFor="Task">Create Task</label>
                    </div>
                </div>



                {hide ? (
                    <div className="row input-task">
                        <div className="input-field col-12" >
                            <textarea name="notes" id="notes" cols="20" rows="10"
                                className="materialize-textarea"
                                onChange={e => setNote(e.target.value)} />
                            <label htmlFor="notes">Notes</label>
                        </div>
                    </div>



                ) : ""
                }

                <div className="row">

                    <div className="input-field col s12">
                        <select onChange={e => setPriority(e.target.value)}>
                            <option defaultValue="Low Priority" disabled >Choose your option</option>
                            <option value="Low Priority">Low Priority</option>
                            <option value="Medium Priority">Medium Priority</option>
                            <option value="High Priority">High Priority</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
                </div>


                <button className="btn waves-effect waves-light" type="submit" name="action">
                    Add Task
                </button>
                <button className="btn waves-effect waves-light" name="cancel">
                    Cancel
                </button>


            </form>
            <div className="row">
                <div className="col-12 line_spacer">
                    <i className="material-icons point mat-icon" onClick={() => setHide(!hide)}>
                        library_books
         </i>
                </div>

            </div>
        </div>
    )
}

export default InputComponent;
