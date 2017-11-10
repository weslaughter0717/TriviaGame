function populate() {

    if (quiz.isEnded()) {
        showScores();


    }

    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id)
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id = 'score'> Your Score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}
var questions = [
    new Question("The molecule hemoglobin is used in which type of cells?", ['red blood cells', 'white blood cells', 'clorophyll', 'the spice girls'], 'red blood cells'),
    new Question("In which country would you find the Panama Canal?", ['chicago', 'panama', 'mexico', 'france'], 'panama'),
    new Question("Who was awarded the first United States patent for the telephone?", ['George Washington', 'JFK', 'Alexander Graham Bell', 'Marilyn Monroe'], 'Alexander Graham Bell'),
    new Question("What is the fastest bird in the world when in its hunting dive?", ['The Peregrine Falcon', 'American Eagle', 'Hawk', 'Pelican'], 'The Peregrine Falcon'),
    new Question("Who painted the famous Dutch Golden age painting The Night Watch?", ['Michelangelo', 'Da Vinci', 'Vladamir Putin', 'Rembrandt'], 'Rembrandt'),
    new Question("In the movie The Lion King, what was Simba's mother's name?", ['Beth', 'Josh', 'Posh', 'Sarabi'], 'Sarabi'),
    new Question("All Shook Up is a song that topped the U.S. Billboard Hot 100 on April 13, 1957. Who was the singer?", ['Blondie', 'Iggy Pop', 'Darius Rucker', 'Elvis Presley'], 'Elvis Presley'),
    new Question("What do you call the small image icons used to express emotions or ideas in digital communication?", ['Emoji', 'Icons', 'Things', 'Doggy'], 'Emoji'),
    new Question("What natural phenomena are measured by the Richter scale?", ['Hurricanes', 'EarthQuakes', 'Avalanches', 'Tornados'], 'EarthQuakes'),
    new Question("How many Super Bowl Rings did Troy Aikman win?", ['1', '2', '3', '4'], '3'),
];

var quiz = new Quiz(questions);

populate();
