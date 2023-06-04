import * as React from 'react';
import "./objectInfoStyle.css";




export default function ObjectInfo() {
    return (
        <section className="CardMod">
            <div >
                <div className="CardText">
                    <h3>title</h3>
                    <p><span
                        style={{color: 'rgb(48, 48, 48, 0.8)', fontWeight: '600', fontSize: '18px'}}>Адрес:</span> адрес
                        тут</p>
                    <p> description</p>
                    <div className="imagesIN">
                        <p>Картинки прикинь, а чё ты ждал?</p>
                    </div>
                </div>

            </div>
        </section>
    )
}