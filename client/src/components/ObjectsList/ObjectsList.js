import * as React from 'react';
import "./objectList.css";
import ObjectItem from "../../components/ObjectItem/ObjectItem";
import {useEffect, useState} from 'react';
import {getObjects} from "../../https";

export default function ObjectsList() {
    const [objects, setObjects] = useState([])
    const getAPIData = async () => {
        const data = await getObjects().then(res => {
            return res.json()
        })
        setObjects(data.entries);
        console.log(data.entries)
    }
    useEffect(() => {
        getAPIData();
    }, [])

    return (
        <section>
            <div className="list">
                {objects.map(el => (
                    <ObjectItem key={el.id} id={el.id} title={el.title} img_url={el.img_url} adress={el.address}/>
                ))}
            </div>
        </section>
    )
}