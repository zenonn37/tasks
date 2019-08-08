import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../actions/auth.action'

export default function Login() {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        const data = {


            username: email,
            password: password
        }
        console.log(data);

        dispatch(loginAction(data))

    }


    return (
        <div>

            <form onSubmit={onSubmit}>

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
