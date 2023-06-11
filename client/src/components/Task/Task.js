import * as React from 'react';
import "./Task.css";
import {useLocation, useParams,} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Task() {
    const [stagePlan, setStagePlan] = useState([])
    const [stageProc, setStageProc] = useState([])
    const [stageFin, setStageFin] = useState([])
    const location = useLocation()
    const {state} = location
    const MoveStage = (stageItem: any) => {

    }
    const DeleteStage = (stageItem: any) => {

    }

    useEffect(() => {
        fetch(`http://localhost:8000/get-stages?object_id=${state.idObject}&status=planned`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Context-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(data => {
                setStagePlan(data.stages)
                console.log(data)
            })
            .catch(error => {
                // enter your logic for when there is an error (ex. error toast)
                console.log(error)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8000/get-stages?object_id=${state.idObject}&status=in process`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Context-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(er => {
                setStageProc(er.stages)
                console.log(er)
            })
            .catch(error => {
                // enter your logic for when there is an error (ex. error toast)
                console.log(error)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8000/get-stages?object_id=${state.idObject}&status=finished`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Context-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(se => {
                setStageFin(se.stages)
                console.log(se)
            })
            .catch(error => {
                // enter your logic for when there is an error (ex. error toast)
                console.log(error)
            })
    }, [])

    return (
        <section>
            <div className="TaskPlan">
                {stagePlan.map((s) => (
                    <div className="StageStyle">
                        <p>{s.stage}</p>
                    </div>
                ))}
            </div>
            <div className="TaskProc">
                {stageProc.map((inp) => (
                    <div className="StageStyle">
                        <p>{inp.stage}</p>
                    </div>
                ))}
            </div>
            <div className="TaskFinish">
                {stageFin.map((fin) => (
                    <div className="StageStyle">
                        <p>{fin.stage}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}
