import * as React from 'react';
import "./objectInfoStyle.css";
import Button from "react-bootstrap/Button";
import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getObject} from "../../https";

export default function ObjectInfo() {

    const [object, setObject] = useState([])
    const {id} = useParams()
    useEffect(() => {
        getObject(id).then(res => res.json()).then(object => setObject(object));
    }, [])
    return (
        <section className="CardMod">
            <div className="inf">
                <h3>{object.title}</h3>
                <p><span style={{
                    color: 'rgb(48, 48, 48, 0.8)',
                    fontWeight: '600',
                    fontSize: '18px'
                }}>Адрес:</span> {object.address}</p>
                <p>{object.phone_number}</p>
                <p>{object.description}</p>
                <NavLink to={"/Tasks"} className="buttonStyle">
                    <Button variant="secondary" className="buttonStyle">Список
                        этапов</Button>{' '}
                </NavLink>
            </div>
            <div className="imageAv">
                <img src={object.img_url} className="imageAv"></img>
            </div>
        </section>
    )
}