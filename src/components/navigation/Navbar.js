import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../actions/auth.action';


function Navbar() {
    const dispatch = useDispatch();
    return (
        <header>
            <img className="logo" src="images/tasko.svg" alt="logo" />
            <div>
                <ul className="nav__links">


                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <i className="small material-icons point" onClick={() => dispatch(logOut())}>

                            exit_to_app
                      </i>
                    </li>

                </ul>

            </div>

            <a className="cta" href="#"><button>Contact</button></a>

        </header>
    )
}



export default Navbar

