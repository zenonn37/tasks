import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newProject } from '../actions/project.action'

function ProjectModal() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [comments, setComments] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            comments: comments,
            color: '#303F9F'
        }
        dispatch(newProject(data));
    }
    return (
        <div id="add-project-modal" className="modal" style={modalStyle}>
            <div className="modal-content">

                <div className="row">

                    <div className="input-field">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}

                        />

                        <label htmlFor="name" className=
                            "active">
                            Project Title
                      </label>

                    </div>
                </div>
                <div className="row">

                    <div className="input-field">
                        <textarea
                            type="text"
                            name="comments"
                            value={comments}
                            onChange={e => setComments(e.target.value)}
                            className="materialize-textarea"

                        />

                        <label htmlFor="comments">
                            Comments
  </label>

                    </div>
                </div>





            </div>
        </div>
    )


}
const modalStyle = {
    width: '40%',
    height: '40%'
}
export default ProjectModal
