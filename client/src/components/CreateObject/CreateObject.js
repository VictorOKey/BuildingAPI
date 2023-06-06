import * as React from 'react';
import './CreateObjectStyle.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CreateObject() {

    return (
        <div className="cardBack">
            <Form>
                <Form.Group className="mb-3" size="lg">
                    <Form.Label>Название проекта</Form.Label>
                    <Form.Control placeholder="Название проекта"/>
                </Form.Group>

                <Form.Group className="mb-3" size="lg">
                    <Form.Label>Адрес</Form.Label>
                    <Form.Control placeholder="Адрес"/>
                </Form.Group>
                <Form.Group className="mb-3" size="lg">
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control placeholder="Номер телефона"/>
                </Form.Group>
                <Form.Group className="mb-3" size="lg">
                    <Form.Label>Адрес рисунка</Form.Label>
                    <Form.Control placeholder="Адрес рисунка"/>
                </Form.Group>
                <Form.Group className="mb-3" size="lg">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control placeholder="Описание"/>
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                    Создать
                </Button>
            </Form>
        </div>
    )
}