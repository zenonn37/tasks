import React from 'react'


function Navbar(props) {
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
                        <a href="#">About</a>
                    </li>

                </ul>

            </div>

            <a className="cta" href="#"><button>Contact</button></a>

        </header>
    )
}



export default Navbar

