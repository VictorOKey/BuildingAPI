import * as React from 'react';
import "./objectItemStyle.css";
import {NavLink} from 'react-router-dom';
export default function ObjectItem() {
    return (
            <NavLink to={"/ViewObject"} className="navig">
                <div className="cardS">
                    <div className="infoCard">
                        <h3>Название</h3>
                        <p className="infoCard-type"><span style={{color: 'rgb(48, 48, 48, 0.8)', fontWeight: '600',fontSize: '18px'}}>Адрес:</span> тут должен быть адрес string</p>
                    </div>
                    <div className="avatarEventMod">
                        <h3>тут картинка</h3>
                    </div>
                </div>
            </NavLink>
    );
}