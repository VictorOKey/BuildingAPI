import * as React from "react";
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/Main">Список Проектов</a>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <NavLink to={"/CreateObject"}>
                            <Button variant="outline-success">Создать Проект</Button>{' '}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}