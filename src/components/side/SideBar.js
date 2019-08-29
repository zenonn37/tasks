import React from 'react'

function SideBar() {
    return (
        <aside className="sidebar">
            <div className="user">
                <div className="avatar">
                    <img src="images/user.svg" />
                </div>
                <div className="persona">
                    <h1>Christopher Crowd</h1>
                </div>
            </div>

            <ul className="menu">
                <li>
                    <a href="#">
                        <i className="fas fa-inbox"></i>
                        Inbox
                      </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-calendar-day"></i>
                        Today
                      </a>
                </li>

            </ul>


            <h6>Projects</h6>
            <a href="#add-project-modal" className="btn-floating btn-small blue darken-1 modal-trigger">
            </a>

            <div className="menu">

                <ul>
                    <li>

                        <a href="#">
                            <i className="fas fa-inbox"></i>
                            My Task
                      </a>

                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-dumbbell"></i>
                            Plank
                      </a>


                    </li>


                </ul>
            </div>
            <h6>Admin</h6>

            <div className="menu">

                <ul>
                    <li>

                        <a href="#">
                            <i className="fas fa-user-cog"></i>
                            Settings
                      </a>

                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-sign-out-alt"></i>
                            Logout
                      </a>


                    </li>


                </ul>
            </div>

        </aside>
    )
}

export default SideBar
