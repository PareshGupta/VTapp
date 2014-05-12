function Question (op1, op2, operator) {
  this.operand1 = op1;
  this.operand2 = op2;
  this.operator  = operator;
  this.answer = this.answer;

  Question.prototype.evaluateAnswer = function(choice) {
    switch (this.operator) {
      case "+" :  
        this.answer = this.operand1 + this.operand2; 
        break;

      case "-" :  
        this.answer = this.operand1 - this.operand2; 
        break;

      case "/" :
        this.answer = this.operand1 / this.operand2; 
        break;

      case "*" :
        this.answer = this.operand1 * this.operand2; 
        break;
    }
    return this.answer;
  }
}

function Quiz() {
  this.questions = new Array();
  this.wrongQuestions = new Array();
  this.mainDiv = document.getElementById('box');
  this.div = document.getElementById('container');
  this.start = document.getElementById('start');
  this.heading = document.getElementById('heading')
  var that = this;
  var i = 0;
  var marks = 0;
  var totalQuestions = 6;
  var maximumMarks = 80;

// method to generate array of 20 questions
  this.generateQuestion = function() {
    for (var i = 0; i < totalQuestions; i++) {
      question = new Question(createQuestion.operand(), createQuestion.operand(), createQuestion.operator());
      this.questions.push(question)
    }
  }

// method to start quiz event
  this.onStartEvent = function() {
    this.start.onclick = function() {
      that.generateQuestion();
      that.renderQuestion();
    };
  }

// method to iterate to questions
  this.iterateQuestion = function() {
    if (i < this.questions.length) {
      questions = this.questions[i].operand1 + " " + this.questions[i].operator + " " + this.questions[i].operand2;
      return questions;
    } else { 
      if (i = totalQuestions) {
        this.quizResult();
      }
    }
  }

// method to get the question page
  this.renderQuestion = function() {
    this.start.remove();
    this.heading.remove();
    var currentQuestion = createElements.pTag();
    currentQuestion.innerText = "Question " + [i + 1] + " : " + this.iterateQuestion();
    createElements.pTag().innerText = "Answer : ";
    submittedAnswer = createElements.inputTag();
    submittedAnswer.focus();
    var next = createElements.buttonTag();
    next.innerText = "Submit & Next";
    score = createElements.pTag();
    score.innerText = "Score : " + " 0 / " + maximumMarks;
    next.onclick = function() {
      that.calculateScore();
      score.innerText = "Score : " + marks + " / " + maximumMarks;
      i++;
      submittedAnswer.value = "";
      submittedAnswer.focus();
      currentQuestion.innerText = "Question " + [i + 1] + " : "  + that.iterateQuestion();
    };
  }

// method to calculate total score
  this.calculateScore = function() {
      currentQuestion = this.questions[i];
      currentQuestion.answer = currentQuestion.evaluateAnswer();
      if (submittedAnswer.value == currentQuestion.answer) {
        marks += 4;
      } else {
        marks -= 1;
        this.wrongQuestions.push(that.iterateQuestion() + " : " + currentQuestion.answer);
      }
    return marks;
  }

// method to get the result page
  this.quizResult = function() {
    this.div.remove();
    createElements.hTag().innerText = "Total Score : " + marks + " / " + maximumMarks;
    createElements.hTag().innerText = "Correct Answer for the questions you answered wrong are : ";
    for (i = 0; i < this.wrongQuestions.length; i++) {
      var para = document.createElement('p');
      para.innerText = this.wrongQuestions[i];
      this.mainDiv.appendChild(para);
    }
  }
}

quiz = new Quiz();
quiz.onStartEvent();


// object to generate random question
var createQuestion = {
  operand : function() {
    var operand = Math.floor(Math.random() * (20) + 1);
    return operand;
  },

  operator : function() {
    var operatorArray = ["+","-","*","/"];
    var operator = operatorArray[Math.floor(Math.random() * operatorArray.length)];
    return operator;
  }
}

// new object to create elements
var createElements = {
  pTag : function() { 
    var para = document.createElement('p');
    quiz.div.appendChild(para);
    return para;
  },

  inputTag : function() {
    var input = document.createElement('input');
    input.setAttribute("class", "answer");
    quiz.div.appendChild(input);
    return input;
  },

  buttonTag : function() {
    var button = document.createElement('button');
    quiz.div.appendChild(button);
    button.innerText = "Submit & Next";
    return button;
  },

  hTag : function() {
    var heading = document.createElement('h4');
    quiz.mainDiv.appendChild(heading);
    return heading;
  }
}