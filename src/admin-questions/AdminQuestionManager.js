import React from 'react';
import axios from 'axios';

import Question from './Question';
import QuestionOnChange from './QuestionOnChange';
import TheAlert from '../layout/TheAlert';
import AddQuestionForm from './AddQuestionForm';

import serverRequest from '../ServerRequest';


class AdminQuestionManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: null,
            questionNumChange: null
        };

        this.handleCancelButton = this.handleCancelButton.bind(this);
        this.handleUpdateButton = this.handleUpdateButton.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
        this.addQuestionHandler = this.addQuestionHandler.bind(this);
        this.handleClickOnChangeQuestion = this.handleClickOnChangeQuestion.bind(this);

    }

    componentDidMount() {
        this.getAllQuestions();
    }

    getAllQuestions() {
        const self = this;
        axios.get(serverRequest.getAllQuestions)
        .then(function(response) {
            self.setState({ questions: response.data });
        })
    }

    getQuestionsForDisplaying() {
        var questions = this.state.questions;
        
        questions = questions.map((value, index) => {
            if(this.state.questionNumChange !== index)
                return <Question
                            key = {index}

                            num = {index}
                            category = {value.category}
                            text = {value.text}
                            onClick = {()=> this.handleClickOnChangeQuestion(index) }
                        />;
            else {
                return <QuestionOnChange
                            key = {index}

                            num = {index}
                            question = {value.text}
                            category = {value.category}
                            answer = {this.determineAnswerInJSON(value)}
                            options = {this.getOptionsArray(value)}

                            cancelHandler = {()=> this.handleCancelButton() }
                            updateHandler = {(updatedData)=> this.handleUpdateButton(updatedData) }
                            deleteHandler = {()=> this.handleDeleteButton(index) }
                        />;
            }
        });
        return questions;
    }

    handleCancelButton() {
        this.setState({ questionNumChange: null });
    }

    handleUpdateButton(updatedData) {
        this.setState({ questionNumChange: null });

        const requestToServer = {
            "answers": [{
                    "answerText": updatedData.answer,
                    "correct": true
                },{
                    "answerText": updatedData.option2,
                    "correct": false
                },{
                    "answerText": updatedData.option3,
                    "correct": false
                },{
                    "answerText": updatedData.option4,
                    "correct": false     
            }],
            "text": updatedData.question,
            "category": updatedData.category
        }
        const questionID = this.state.questions[updatedData.num].id;

        const self = this;
        axios({
            method: 'put',
            url: serverRequest.updateQuestion + questionID,
            data: requestToServer
        })
        .then(function(response) {
            self.getAllQuestions();
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    handleDeleteButton(index) {
        const questionID = this.state.questions[index].id;
        this.setState({ questionNumChange: null });

        const self = this;
        axios({
            method: 'delete',
            url: serverRequest.deleteQuestion + questionID,
        })
        .then(function(response) {
            self.getAllQuestions();
        })
        .catch(function(error) {
            console.log(error);
        })

    }

    addQuestionHandler(questionData) {
        this.setState({ questionNumChange: null });

        let requestToServer = JSON.stringify({
            "answers": [{
                    "answerText": questionData.answer,
                    "correct": true
                },{
                    "answerText": questionData.option2,
                    "correct": false
                },{
                    "answerText": questionData.option3,
                    "correct": false
                },{
                    "answerText": questionData.option4,
                    "correct": false
            }],
            "text": questionData.question,
            "category": questionData.category
        });

        const self = this;
        axios({
            method: 'post',
            url: serverRequest.addQuestion,
            headers: {'Content-Type' : 'application/json'},
            data: requestToServer
        })
        .then(function(response) {
            self.getAllQuestions();
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    determineAnswerInJSON(questionObj) {
        for(let i = 0; i < questionObj.answers.length; ++i) {
            if(questionObj.answers[i].correct) return questionObj.answers[i].answerText;
        }
    }
    getOptionsArray(questionObj) {
        let returnValue = [];
        questionObj.answers.forEach(value => { if( !value.correct ) returnValue.push(value.answerText); });
        return returnValue;
    }

    handleClickOnChangeQuestion(questionNum) {
        this.setState({ questionNumChange: questionNum});
    }

    render() {
       // const questions = this.getQuestionsForDisplaying();
        return(
            <div>
                {this.state.questions === null ?
                    <TheAlert variant='2' text='загрузка вопросов'/> : this.getQuestionsForDisplaying()}
                    <AddQuestionForm addHandler={(questionData) => this.addQuestionHandler(questionData)}/>
            </div>
        );
    }
}

export default AdminQuestionManager;