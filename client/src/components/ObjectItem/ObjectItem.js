import * as React from 'react';
import "./objectItemStyle.css";
import {NavLink} from 'react-router-dom';
//import image from '../../assets/foto/AdobeStock_136170652resize_0.jpg';
export default function ObjectItem({id, title, adress, img_url}) {
    return (
            <NavLink to={"/ViewObject"} className="navig">
                <div className="cardItem">
                    <div className="infoCard">
                        <h3>{title}</h3>
                        <p className="infoCard-type"><span style={{color: 'rgb(48, 48, 48, 0.8)', fontWeight: '600',fontSize: '18px'}}>Адрес:</span> {adress}</p>
                    </div>
                    <div className="imageAv">
                        <img src={img_url} className="imageAv"></img>
                    </div>
                </div>
            </NavLink>
    );
}