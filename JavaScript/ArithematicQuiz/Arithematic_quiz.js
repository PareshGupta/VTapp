function Quiz() {
  this.div = document.getElementById('container');
  this.submit = document.getElementById('submit');
  this.question = document.getElementById('question');
  this.answer = document.getElementById('ans');
  this.score = document.getElementById('score');
  var that = this;
  var marks = 0;
  var maxQuestions = 0;
  var array = [];

// method to get questions
  this.getQuestions = function() {
    ques = this.createQuestions();
    this.question.innerText = "What is " + ques + " ?";
    this.answer.focus();
    this.answer.value = "";
    ans = eval(ques);
    this.score.innerText = marks + " / 20";
    maxQuestions++;
    this.submit.onclick = function() { that.checkMaxQuestions(); };
  }

// method to check the questions limit
  this.checkMaxQuestions = function() {
    if (maxQuestions < 20) {
      that.evaluateAnswer(ans);
      that.getQuestions(); 
    } else {
      if (maxQuestions = 20) {
        that.evaluateAnswer(ans);
        that.showResult();
      }
    }
  }

// method to create random questions
  this.createQuestions = function() {
    var number1 = Math.floor(Math.random() *(20) + 1);
    var number2 = Math.floor(Math.random() *(20) + 1);
    var operator = ["+","-","*","/"];
    var randomOperator = operator[Math.floor(Math.random() *operator.length)]; 
    var question = number1 + " " + randomOperator + " " + number2;
    return question;
  }

// method to evaluate answers
  this.evaluateAnswer = function(choice) {
    if (this.answer.value == choice) {
      marks = marks + 1;
    } else {
      array.push(ques);
    }
    return marks;
  }

// method to show result
  this.showResult = function() {
    var totalScore = this.div.appendChild(document.createElement('h3'));
    totalScore.innerText = "Total Score : " + marks;
    document.getElementById("list").remove();
    var para = document.createElement("p");
    para.innerText = "Correct Answers for the questions you answered wrong:";
    this.div.appendChild(para);
    for (i = 0; i < array.length; i++) {
      var para2 = document.createElement('p');
      para2.innerText = array[i] + " =  " + eval(array[i]);
      this.div.appendChild(para2);
    }
  }
}

// new instance of class Quiz
var quiz = new Quiz();
quiz.getQuestions();