import * as React from 'react';
import "./objectInfoStyle.css";
import Button from "react-bootstrap/Button";
import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getObject} from "../../https";
import image from "../../assets/foto/AdobeStock_136170652resize_0.jpg"
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
                <center><span style={{
                    color: 'rgb(48, 48, 48, 0.8)',
                    fontWeight: '600',
                    fontSize: '18px'
                }}>Адрес:</span><p> {object.address}</p></center>
                <center><span style={{
                    color: 'rgb(48, 48, 48, 0.8)',
                    fontWeight: '600',
                    fontSize: '18px'
                }}>Номер телефона:</span><p>{object.phone_number}</p></center>
                <center><span style={{
                    color: 'rgb(48, 48, 48, 0.8)',
                    fontWeight: '600',
                    fontSize: '18px'
                }}>Описание:</span><p>{object.description}</p></center>
                <center><span style={{
                    color: 'rgb(48, 48, 48, 0.8)',
                    fontWeight: '600',
                    fontSize: '18px'
                }}>Материалы:</span></center>
                <ul className="list-group">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </div>
            <div className="imageAl">
                <img src={image} className="imageIN"></img>
                <NavLink to={"/Tasks"} className="buttonStyle">
                    <Button variant="secondary" className="buttonStyle">Список
                        этапов</Button>{' '}
                </NavLink>
            </div>
        </section>
    )
}