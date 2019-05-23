import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class SingleQuestion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
        <div className="userQuiz">
            <div className="singleQuestion d-flex justify-content-center align-items-center mb-4">
                {this.props.questionToDisplay.text}
            </div>
            <Row className="answerList mb-4">
                <Col md={6} xs={12} onClick={()=>this.props.answerHandler(this.props.questionToDisplay.answers[0].id)}>{this.props.questionToDisplay.answers[0].ans}</Col>
                <Col md={6} xs={12} onClick={()=>this.props.answerHandler(this.props.questionToDisplay.answers[1].id)}>{this.props.questionToDisplay.answers[1].ans}</Col>
                <Col md={6} xs={12} onClick={()=>this.props.answerHandler(this.props.questionToDisplay.answers[2].id)}>{this.props.questionToDisplay.answers[2].ans}</Col>
                <Col md={6} xs={12} onClick={()=>this.props.answerHandler(this.props.questionToDisplay.answers[3].id)}>{this.props.questionToDisplay.answers[3].ans}</Col>
            </Row>
        </div>
        );

    }
}

export default SingleQuestion;