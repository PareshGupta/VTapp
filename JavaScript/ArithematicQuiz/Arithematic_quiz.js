function Question(op1, op2, operator) {
  this.operand1 = op1;
  this.operand2 = op2;
  this.operator = operator;
  this.answer;

  Question.prototype.correctAnswer = function() {
    switch (this.operator) {
      case "+" : return(parseInt(this.operand1 + this.operand2)); break;
      case "-" : return(parseInt(this.operand1 - this.operand2)); break;
      case "/" : return(parseInt(this.operand1 / this.operand2)); break;
      case "*" : return(parseInt(this.operand1 * this.operand2)); break;
    }
  }

  Question.prototype.evaluateAnswer = function() {
    return(this.correctAnswer() == this.answer);
  }

  Question.prototype.toString = function() {
    return(this.operand1 + " " + this.operator + " " + this.operand2);
  }
}

function Quiz() {
  this.questions = new Array();
  this.wrongQuestions = new Array();
  this.mainDiv = document.getElementById('box');
  this.div = document.getElementById('container');
  this.start = document.getElementById('start');
  this.quizInfo = document.getElementById('heading');
  this.marks = 0;
  this.totalQuestions = 5;
  this.correctAnswerMarks = 4;
  this.incorrectAnswerMarks = 1;
  this.maximumMarks = this.totalQuestions * this.correctAnswerMarks;
  this.submittedAnswer = "";

// method to generate array of 20 questions
  this.generateQuestions = function() {
    for (var i = 0; i < this.totalQuestions; i++) {
      question = new Question(createQuestion.operand(), createQuestion.operand(), createQuestion.operator());
      this.questions.push(question);
    }
  }

// method to start quiz event
  this.onStartEvent = function() {
    var that = this;
    this.start.onclick = function() {
      that.generateQuestions();
      that.renderQuestions();
    };
  }

// method to iterate to questions
  this.iterateQuestion = function(index) {
    if (index < this.questions.length) {
      return this.questions[index].toString();
    } else { 
      if (index == this.totalQuestions) {
        this.quizResult();
      }
    }
  }

// method to get the question page
  this.renderQuestions = function() {
    var index = 0;
    this.start.remove();
    this.quizInfo.remove();
    var currentQuestion = createElements.pTag();
    currentQuestion.innerText = "Question " + [index + 1] + " : " + this.iterateQuestion(index);
    this.submittedAnswer = createElements.inputTag();
    this.submittedAnswer.focus();
    var next = createElements.buttonTag();
    score = createElements.pTag();
    score.innerText = "Score : " + " 0 / " + this.maximumMarks;
    var that = this;
    next.onclick = function() {
      that.calculateScore(index);
      score.innerText = "Score : " + that.marks + " / " + that.maximumMarks;
      index++;
      that.submittedAnswer.value = "";
      that.submittedAnswer.focus();
      currentQuestion.innerText = "Question " + [index + 1] + " : "  + that.iterateQuestion(index);
    };
  }

// method to calculate total score
  this.calculateScore = function(index) {
    currentQuestion = this.questions[index];
    currentQuestion.answer = parseInt(this.submittedAnswer.value);
    if (currentQuestion.evaluateAnswer()) {
      this.marks += this.correctAnswerMarks;
    } else {
      this.marks -= this.incorrectAnswerMarks;
      this.wrongQuestions.push(currentQuestion);
    }
  }

// method to get the result page
  this.quizResult = function() {
    this.div.remove();
    createElements.hTag().innerText = "Total Score : " + this.marks + " / " + this.maximumMarks;
    createElements.hTag().innerText = "Correct Answer for the questions you answered wrong are : ";
    for (i = 0; i < this.wrongQuestions.length; i++) {
      var para = document.createElement('p');
      wrongQuestion = this.wrongQuestions[i];
      para.innerText = wrongQuestion.toString() + " : " + wrongQuestion.correctAnswer();
      this.mainDiv.appendChild(para);
    }
  }
}

// object to generate random question
var createQuestion = {
  operand : function() {
    var operand = Math.floor(Math.random() * (20) + 1);
    return operand;
  },

  operator : function() {
    var operatorArray = ["+", "-", "*", "/"];
    var operator = operatorArray[Math.floor(Math.random() * operatorArray.length)];
    return operator;
  }
}

// new object to create elements
var createElements = {
  quiz : "",
  pTag : function() { 
    var para = document.createElement('p');
    this.quiz.div.appendChild(para);
    return para;
  },

  inputTag : function() {
    var input = document.createElement('input');
    input.setAttribute("class", "answer");
    this.quiz.div.appendChild(input);
    return input;
  },

  buttonTag : function() {
    var button = document.createElement('button');
    this.quiz.div.appendChild(button);
    button.innerText = "Submit & Next";
    return button;
  },

  hTag : function() {
    var heading = document.createElement('h4');
    this.quiz.mainDiv.appendChild(heading);
    return heading;
  }
}

window.onload = function(){
  quiz = new Quiz();
  createElements.quiz = quiz;
  quiz.onStartEvent();
}
