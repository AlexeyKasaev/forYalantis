import React from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class QuestionOnChange extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num: this.props.num,
            question: this.props.question,
            category: this.props.category,
            answer: this.props.answer,
            option2: this.props.options[0],
            option3: this.props.options[1],
            option4: this.props.options[2]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    getInputData() {
        return {
            num: this.state.num,
            question: this.state.question,
            category: this.state.category,
            answer: this.state.answer,
            option2: this.state.option2,
            option3: this.state.option3,
            option4: this.state.option4
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
      }

    render() {
        console.log(this.props);
        return(
            <Card>
                <Card.Body>
                    <Card.Title>Изменение вопроса № {this.state.num + 1}</Card.Title>
                    <Form autoComplete="off">
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Категория
                            </Form.Label>
                            <Col sm={10}>
                                <div key= 'default-radio'>
                                    <Form.Check
                                        type= 'radio'
                                        name= 'category'
                                        label= 'SPORT'
                                        id= 'check-sport'
                                        value= 'SPORT'
                                        checked= {this.state.category === 'SPORT'}
                                        onChange= {this.handleChange}
                                    />
                                    <Form.Check
                                        type= 'radio'
                                        name= 'category'
                                        label= 'TRADITION'
                                        id= 'check-tradition'
                                        value= 'TRADITION'
                                        checked= {this.state.category === 'TRADITION'}
                                        onChange= {this.handleChange}
                                    />
                                </div>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Вопрос
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control
                                onChange= {this.handleChange}
                                type= "text"
                                placeholder= "Вопрос"
                                name= "question"
                                value= {this.state.question}
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Правильный ответ
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control
                                onChange= {this.handleChange}
                                type= "text"
                                placeholder= "Правильный ответ"
                                name= "answer"
                                value= {this.state.answer}
                                className= "rightAnswer"
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Вариант ответа 2
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control
                                onChange= {this.handleChange}
                                type= "text"
                                name= "option2"
                                placeholder= "Вариант ответа 2"
                                value= {this.state.option2}
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Вариант ответа 3
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control
                                onChange= {this.handleChange}
                                type= "text"
                                name= "option3"
                                placeholder= "Вариант ответа 3"
                                value= {this.state.option3}
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Вариант ответа 4
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control
                                onChange= {this.handleChange}
                                type= "text"
                                name= "option4"
                                placeholder= "Вариант ответа 4"
                                value= {this.state.option4}
                            />
                            </Col>
                        </Form.Group>
                        <Row>
                            <Col sm={{ span: 6 }}>
                                <Button
                                    onClick= {()=> this.props.updateHandler(this.getInputData())}
                                    variant= "outline-primary"
                                >
                                    Изменить
                                </Button>
                                <Button
                                    onClick= {()=> this.props.cancelHandler()}
                                    variant= "outline-secondary"
                                >
                                    Отмена
                                </Button>
                            </Col>
                            <Col sm={{ span: 6 }}>
                                <Button
                                    onClick= {()=> this.props.deleteHandler()}
                                    variant="outline-danger"
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default QuestionOnChange;