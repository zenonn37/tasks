import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../actions/auth.action';
import { Link } from 'react-router-dom';
import moment from 'moment';


function Navbar() {
    const dispatch = useDispatch();
    return (
        <header>
            <img className="logo" src="images/tasko.svg" alt="logo" />
            <div>
                <ul className="nav__links">

                    <li>
                        <i className="fas fa-calendar-times">

                        </i>
                        {moment().format('dddd  Do,h:mm a')}
                    </li>


                    <li>
                        <i className="fas fa-bell point"></i>

                    </li>

                    <li>
                        <i className="fas fa-sign-out-alt point" onClick={() => dispatch(logOut())}></i>

                    </li>

                </ul>

            </div>



        </header>
    )
}



export default Navbar

