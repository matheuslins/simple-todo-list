import React from 'react'

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </a>
            </div>
        </div>

        <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <li><a href="#/todos">Taferas</a></li>
                <li><a href="#/about">Sobre</a></li>
            </ul>
        </div>
    </nav>
)