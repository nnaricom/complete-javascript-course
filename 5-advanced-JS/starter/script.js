(function () {

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('---------------------');
    }
    
    Question.prototype.checkAnswer = function(ans, fn) {
        var sc;
        if(ans == this.correct) {
            console.log('Correct answer.');
            sc = fn(true);
        }
        else {
            console.log('Wrong. Try again!');
            sc = fn(false);
        }

        this.displayScore(sc);
    }
    
    var questions = [];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    
    var keepScore = score();
    

    questions.push(new Question(
        'Is JavaScript easy?',
        ['Yes', 'No'],
        0));
    
    questions.push(new Question(
        'What\'s my name?',
        ['Tatu', 'Kalevi'],
        0));
    
    function restart() {
        var n = Math.floor(Math.random() * questions.length);
        
        questions[n].displayQuestion();

        var input = prompt('Please select the correct answer.');

        
        if(input !== 'exit') {
            questions[n].checkAnswer(parseInt(input), keepScore);

            restart();
        }
    }
    restart();
    
})();


