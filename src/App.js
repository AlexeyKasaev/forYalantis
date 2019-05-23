import React from 'react';
import { BrowserRouter as Router, Route/*, Link*/ } from "react-router-dom";

import Container from 'react-bootstrap/Container';

import MainPage from './main-page/MainPage';
import AdminQuestionManager from './admin-questions/AdminQuestionManager';
import UserQuiz from './user-quiz/UserQuiz';
import Header from './layout/Header';
import Footer from './layout/Footer';


function App() {
    return (
        <div id= "primaryFlexWrapper">
            <div id= "primaryFlexContent">
                <Header />
                <Container fluid='true'>
                    <Router>
                        <Route
                            path= "/" exact
                            component= {MainPage}
                        />
                        <Route
                            path= "/admin/questions/"
                            component= {AdminQuestionManager}
                        />
                        <Route
                            path= "/user/quiz/"
                            component= {UserQuiz}
                        />
                    </Router>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default App;
