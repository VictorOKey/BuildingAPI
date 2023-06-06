import * as React from 'react';
import "./objectInfoStyle.css";
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";



export default function ObjectInfo() {
    return (
        <section className="CardMod">
            <div>
                <div className="CardText">
                    <div>
                        <h3>title</h3>
                        <p><span
                            style={{
                                color: 'rgb(48, 48, 48, 0.8)',
                                fontWeight: '600',
                                fontSize: '18px'
                            }}>Адрес:</span> адрес
                            тут</p>
                        <p className="hr-line"> номер телефона</p>
                        <p className="hr-line"> description</p>
                        <NavLink to={"/Tasks"} className="buttonStyle">
                            <Button variant="outline-success" className="buttonStyle">Список
                                этапов</Button>{' '}
                        </NavLink>
                    </div>

                </div>
                <div className="imagesIN">
                    <p>Картинки прикинь, а чё ты ждал?</p>
                </div>
            </div>
        </section>
    )
}