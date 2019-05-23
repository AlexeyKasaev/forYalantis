import React from 'react';
import axios from 'axios';

import serverRequest from '../ServerRequest';

import SingleQuestion from './SingleQuestion';
import QuestionNavigation from './QuestionNavigation';
import TheAlert from '../layout/TheAlert';



class UserQuiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions : [],
            answeredQuestions: [],
            skipedQuestions: [],
            userResults: [],
            navigationInfo: null,
            displayedQuestion: null,
            displayedQuestionNum : null
        };

        this.answerHandler = this.answerHandler.bind(this);
        this.skipHandler = this.skipHandler.bind(this);
    }

    componentDidMount() {
        this.getQuestions();
    }

    getQuestions() {
        const self = this;
        axios.get(serverRequest.getAllQuestions)
        .then(function(response) {
            const questions = response.data;
            const displayedQuestion = response.data[0] ? response.data[0] : null;

            self.setState({
                questions: questions,
                displayedQuestion: displayedQuestion,
                displayedQuestionNum : 0,
            }, self.setState({navigationInfo: self.getNavigationData(self.state.answeredQuestions)}));
        })
    }

    answerHandler(answerId) {
        const questionID = this.state.displayedQuestion.id;
        const answerID = answerId;

        let newUserResults = this.state.userResults;
        let newDisplayedQuestionNum = this.state.displayedQuestionNum + 1;
        let newAnsweredQuestions = this.state.answeredQuestions.concat(this.state.displayedQuestionNum);
        let newDisplayedQuestion = this.state.questions[newDisplayedQuestionNum];

        newUserResults.push({[questionID] : answerID});

        this.setState({
            userResults: newUserResults,
            displayedQuestionNum: newDisplayedQuestionNum,
            displayedQuestion: newDisplayedQuestion,
            answeredQuestions: newAnsweredQuestions,
            navigationInfo: this.getNavigationData(newAnsweredQuestions)
        });
    }

    getNavigationData(newAnsweredQuestions) {
        let navigationData = [];
        for(let i = 0; i < this.state.questions.length; ++i) {
            if(newAnsweredQuestions.includes(i)) {
                navigationData.push( {num: i, status: 'answered'} );
            } else if(this.state.skipedQuestions.includes(i)) {
                navigationData.push( {num: i, status: 'skipped'} );
            } else {
                navigationData.push( {num: i, status: 'not answered'} );
            }
        }
        return navigationData;
    }

    skipHandler(skippedQuestionNum) {
        console.log('olol');
    }

    render() {
        return (
            <div>
                {this.state.questions === null ?
                    ( <TheAlert
                            variant= '1'
                            text= 'Загрузка опросника'
                        /> )
                : this.state.questions.length === 0 ?
                    ( <TheAlert
                            variant= '1'
                            text= 'Нет вопросов к отображению'
                        /> )
                : ( 
                    <div>
                        <SingleQuestion 
                            questionToDisplay= {this.state.displayedQuestion}
                            answerHandler= {(answerID)=> this.answerHandler(answerID)}
                        />
                        <QuestionNavigation
                            navigationInfo= {this.state.navigationInfo}
                            navigateHandler= {(questionNum)=> this.navigateHandler(questionNum)}
                            skipHandler= {()=> this.skipHandler(this.state.displayedQuestionNum)}
                        />
                    </div> )
                }
            </div>
        );
    }
}

export default UserQuiz;