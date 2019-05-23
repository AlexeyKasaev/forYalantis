class serverRequests {

    constructor() {
    //this.serverAddress = 'http://127.0.0.1/edsa-server';
    this.serverAddress = 'https://wushu-exam-server.herokuapp.com';


    this.getAllQuestions = this.serverAddress + '/questions/';
    this.updateQuestion = this.serverAddress + '/questions/'; //id required then
    this.deleteQuestion = this.serverAddress + '/questions/delete/'; //id required then
    this.addQuestion = this.serverAddress + '/questions/';
    }

}

const serverRequest = new serverRequests();

export default serverRequest;
