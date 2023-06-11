import * as React from 'react';
import './CreateObjectStyle.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {createObject} from "../../https";
import {Col, Row} from "react-bootstrap";

export default function CreateObject() {
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [phone_number, setPhone] = useState('')
    const [img_url, setImg_url] = useState([])
    const [description, setDiscription] = useState('')
    const [stages, setStages] = useState([])
    const [materials, setMaterials] = useState([])
    const addStages = () => {
        setStages([...stages, {stage: ''}])
    }
    const changeStages = (key, value, number) => {
        console.log({...stages, [key]: value})
        setStages(stages.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const removeStage = (number) => {
        setStages(stages.filter(i =>
            i.number !== number))
    }
    const createObjectOne= (evt) => {
        evt.preventDefault()
        const newObject = {
            title, address, img_url, phone_number, description, stages, materials
        }
        createObject(newObject).then((response) => console.log(response));
        console.log(newObject)
    }
    return (
        <div className="cardBack">
            <Form>
                <Form.Group className="mb-3" size="lg">
                    <Form.Label>Название проекта</Form.Label>
                    <Form.Control placeholder="Название проекта" onChange={e => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" size="lg">
                    <Form.Label>Адрес</Form.Label>
                    <Form.Control placeholder="Адрес" onChange={e => setAddress(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" size="lg">
                    <Form.Label>Адрес рисунка</Form.Label>
                    <Form.Control placeholder="Адрес рисунка" onChange={e => setImg_url([{img_url: "string"}])}/>
                </Form.Group>
                <Form.Group className="mb-3" size="lg">
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control placeholder="Номер телефона" onChange={e => setPhone(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" size="lg">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control placeholder="Описание" onChange={e => setDiscription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" size="lg">
                    <Button variant={"outline-dark"} onClick={addStages}>
                        Добавить Этап
                    </Button>
                    {
                        stages.map(i =>
                            <Row className="mt-4" size="lg" key={i.number}>
                                <Col>
                                    <Form.Control
                                        value={i.stage}
                                        onChange={(e) => changeStages('stage', e.target.value, i.number)}
                                        placeholder="название этапа"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        onClick={() => removeStage(i.number)}
                                        variant={"outline-danger"}
                                    >Удалить</Button>

                                </Col>
                            </Row>
                        )
                    }
                </Form.Group>
                <Form.Group className="mb-3" size="lg">
                    <Form.Label>Материалы</Form.Label>
                    <Form.Control placeholder="Материал" onChange={e => setMaterials([{material: "string"}])}/>
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(evt) => createObjectOne(evt)}>
                    Создать
                </Button>
            </Form>
        </div>
    )
}