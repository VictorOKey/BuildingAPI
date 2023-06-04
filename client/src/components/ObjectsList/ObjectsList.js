import * as React from 'react';
import "./objectList.module.css";
//import ObjectItem from "../ObjectItem/ObjectItem";
import ObjectItem from "../../components/ObjectItem/ObjectItem";
export default function ObjectsList() {
    return(
        <section>
            <div className="list-object">
                <ObjectItem/>
                <ObjectItem/>
                <ObjectItem/>
            </div>
        </section>
    )
}