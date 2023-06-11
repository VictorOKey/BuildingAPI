import * as React from 'react';
import "./objectInfoStyle.css";
import Button from "react-bootstrap/Button";
import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getObject} from "../../https";
import image from "../../assets/foto/AdobeStock_136170652resize_0.jpg"
export default function ObjectInfo() {

    const [vam, setObject] = useState([])
    const {id} = useParams()
    useEffect(() => {
        getObject(id).then(res => res.json()).then(vam => setObject(vam));
    }, [])



    return (
        <section className="CardMod">
            <div className="inf">
                <center><h3>{vam.title}</h3></center>
                <center><span style={{
                    color: 'rgb(48, 48, 48, 0.8)',
                    fontWeight: '600',
                    fontSize: '18px'
                }}>Адрес:</span><p> {vam.address}</p></center>
                <center><span style={{
                    color: 'rgb(48, 48, 48, 0.8)',
                    fontWeight: '600',
                    fontSize: '18px'
                }}>Номер телефона:</span><p>{vam.phone_number}</p></center>
                <center><span style={{
                    color: 'rgb(48, 48, 48, 0.8)',
                    fontWeight: '600',
                    fontSize: '18px'
                }}>Описание:</span><p>{vam.description}</p></center>
                <center><span style={{
                    color: 'rgb(48, 48, 48, 0.8)',
                    fontWeight: '600',
                    fontSize: '18px'
                }}>Материалы:</span></center>
                <ul className="list-group">
                    {vam.materials?.map((item) => (<li className="list-group-item" style={{background: "lightgray"}}>{item.material}</li>))}
                </ul>
            </div>
            <div className="imageAl">
                <img src={image} className="imageIN"></img>
                <NavLink to={"/Tasks"} className="buttonStyle" state={{idObject: vam.id}}>
                    <Button variant="secondary" className="buttonStyle">Список
                        этапов</Button>{' '}
                </NavLink>
            </div>
        </section>
    )
}