import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerAction } from '../../actions/auth.action'

export default function Register() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        const data = {

            name: name,
            email: email,
            password: password
        }
        console.log(data);

        dispatch(registerAction(data))

    }


    return (
        <div>

            <form onSubmit={onSubmit}>
                <div className="fields">
                    <input type="text" name="username" onChange={e => setName(e.target.value)} placeholder="Full Name" />
                </div>

                <div className="fields">
                    <input type="text" name="username" onChange={e => setEmail(e.target.value)} placeholder="Username" />
                </div>
                <div className="fields">
                    <input type="text" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <div className="fields">
                    <input type="submit" name="Submit" />
                </div>

            </form>

        </div>
    )
}
