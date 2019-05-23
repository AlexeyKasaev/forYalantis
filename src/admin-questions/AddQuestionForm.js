import React from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class AddQuestionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: '',
            category: '',
            answer: '',
            option2: '',
            option3: '',
            option4: ''
        };

        this.getQuestionData = this.getQuestionData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getQuestionData() {
        this.setState({
            question: '',
            category: '',
            answer: '',
            option2: '',
            option3: '',
            option4: ''
        });
        return {
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
        return(
            <Card className= "mb-4">
                <Card.Body>
                    <Card.Title>Добавить вопрос</Card.Title>
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
                                    className= "rightAnswer"
                                    value= {this.state.answer}
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
                            <Col sm={{ span: 3, offset: 2 }}>
                                <Button
                                    onClick={()=> this.props.addHandler(this.getQuestionData())}
                                    variant="dark"
                                >
                                    Добавить
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default AddQuestionForm;