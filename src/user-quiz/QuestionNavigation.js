import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class QuestionNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }



    render() {
        console.log('Question navigation render', this.props.navigationInfo);
        return (
            <Row className="navigationZone">
                <Col md={12} className="skipButton" onClick={()=>this.props.skipHandler()}>Отложить вопрос</Col>
            </Row>
        );
    }
}

export default QuestionNavigation;