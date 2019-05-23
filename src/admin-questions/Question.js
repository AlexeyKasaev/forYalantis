import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Question(props) {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Вопрос № {props.num + 1}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Категория: {props.category}
                </Card.Subtitle>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button 
                    variant= "outline-secondary"
                    onClick= {()=>props.onClick()}
                >
                    изменить/удалить вопрос
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Question;