const questions = [
    {
       "question":"Wer hat HTML erfunden?",
       "answer_1":"Robbie Williams",
       "answer_2":"Lady Gaga",
       "answer_3":"Tim Berners-Lee",
       "answer_4":"Justin Bieber",
       "right_answer":3
    },
    {
       "question":"Was ist der Zweck des (alt) Attributs in einem (img) Tag?",
       "answer_1":"Es gibt den Titel des Bildes an",
       "answer_2":"Es beschreibt den Inhalt des Bildes für Nutzer, die das Bild nicht sehen können",
       "answer_3":"Es gibt die Abmessungen des Bildes an",
       "answer_4":"Es legt fest, ob das Bild horizontal oder vertikal ausgerichtet ist",
       "right_answer":2
    },
    {
       "question":"Was ist der Zweck des (head) Elements in HTML??",
       "answer_1":"Es definiert den Hauptinhalt der Webseite",
       "answer_2":"Es definiert den Fußbereich der Webseite",
       "answer_3":"Es definiert die Navigationsleiste der Webseite",
       "answer_4":"Es enthält Metadaten über die Webseite, wie z.B. den Titel, die Beschreibung oder die Codierung",
       "right_answer":4
    },
    {
       "question":"Was ist der Zweck des (href) Attributs in einem (a) Tag?",
       "answer_1":"Es gibt den Text an, der beim Klick auf den Link angezeigt wird",
       "answer_2":"Es gibt den Namen des Links an",
       "answer_3":"Es gibt den Titel des Links an",
       "answer_4":"Es gibt den Ziel-URL an, auf den der Link verweist",
       "right_answer":4
    },
    {
       "question":"Was ist der Zweck des (form) Elements in HTML??",
       "answer_1":"Es definiert den Inhalt der Webseite",
       "answer_2":"Es definiert den Hauptbereich der Webseite",
       "answer_3":"Es definiert ein Formular, in dem der Nutzer Eingaben tätigen kann",
       "answer_4":"Es definiert eine Tabelle mit Daten",
       "right_answer":3
    },
    {
       "question":"Was ist der Zweck des (title) Attributs in einem (a) Tag?",
       "answer_1":"Es gibt den Text an, der beim Klick auf den Link angezeigt wird",
       "answer_2":"Es gibt den Namen des Links an",
       "answer_3":"Es gibt den Ziel-URL an, auf den der Link verweist",
       "answer_4":"Es gibt den Titel des Links an",
       "right_answer":4
    },
    {
       "question":"Was ist der Zweck der HTML-Auszeichnungssprache?",
       "answer_1":"Es definiert eine Tabelle mit Daten",
       "answer_2":"Sie beschreibt, wie die Inhalte auf der Webseite angezeigt werden sollen",
       "answer_3":"Sie ermöglicht es, interaktive Elemente auf der Webseite einzubinden",
       "answer_4":"Sie sorgt dafür, dass die Webseite auf allen Geräten und in allen Browsern gleich dargestellt wird",
       "right_answer":2
    }
 ];

 
 let currentQuestion = 0;
 let shownQuestionNumber = 1;
 let correctAnswerAmount = 0;
 let AUDIO_SUCCESS = new Audio('audio/success.mp3');
 let AUDIO_FAIL = new Audio('audio/wrong.mp3');


 function init(){
    document.getElementById('questionAmount').innerHTML = questions.length;
    showQuestion();
    calculateProgressBar();
 }


 function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = `<div class="question-letter"><b>A</b></div>` + question['answer_1'];
    document.getElementById('answer_2').innerHTML = `<div class="question-letter"><b>B</b></div>` + question['answer_2'];
    document.getElementById('answer_3').innerHTML = `<div class="question-letter"><b>C</b></div>` + question['answer_3'];
    document.getElementById('answer_4').innerHTML = `<div class="question-letter"><b>D</b></div>` + question['answer_4'];
    checkIfLastQuestion();
 }


 function checkIfLastQuestion(){
   let questionAmount = document.getElementById('questionAmount').innerHTML
   if (shownQuestionNumber == questionAmount) {
      document.getElementById('next-button').innerHTML = `Ergebniss`;
   }
 }

 
 function answer(selection){
   let correctAnswer = questions[currentQuestion]['right_answer']
   let selectedAnswerNumber = selection.slice(-1);
   let idOfRightAnswer = `answer_${questions[currentQuestion]['right_answer']}`
   
   if (selectedAnswerNumber == correctAnswer){     /* check if answer is correct */
      answerIsCorrect(selection);
   } else {
      wrongAnswer(selection, idOfRightAnswer);
   }
   document.getElementById('next-button').disabled = false;
 }


 function answerIsCorrect(selection){
   document.getElementById(selection).parentNode.classList.add("bg-success") 
   AUDIO_SUCCESS.play();
   correctAnswerAmount++;     /* counts the correctly answered questions */
 }


 function wrongAnswer(selection, idOfRightAnswer){
   document.getElementById(selection).parentNode.classList.add("bg-danger") 
   document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success") 
   AUDIO_FAIL.play();
 }


 function disableButton(){
   document.getElementById('next-button').disabled = true;
 }


 function nextQuestion() {
   let questionAmount = document.getElementById('questionAmount').innerHTML
   if (shownQuestionNumber == questionAmount) {    /* checks if its the last question */
      initResultPage();
   } else {
      initNextQuestion();
   }
 }


 function initResultPage(){
   showResultPage();
   document.getElementById('trophy').style=""
   document.getElementById('progressBar').innerHTML = `100%`;
   document.getElementById('progressBar').style = `width: 100%`;
}


function initNextQuestion(){
   currentQuestion++;
   shownQuestionNumber++;
   document.getElementById('questionNumber').innerHTML = shownQuestionNumber;
   removeColors();
   showQuestion();
   calculateProgressBar();
}


 function calculateProgressBar() {
   let progress = Math.floor((100 / questions.length) * (shownQuestionNumber -1));
   document.getElementById('progressBar').innerHTML = `${progress}%`;
   document.getElementById('progressBar').style = `width: ${progress}%`;
 }
 

 function showResultPage(){
   document.getElementById('card-right').innerHTML = ``;
   document.getElementById('card-right').innerHTML = resultPageTemplate();
 }


 function resultPageTemplate(){
   return `
   <div class="result-page">
      <img id="result-img" src="img/brain result.png">
      <h2>COMPLETED HTML QUIZ</h2>
      <span>YOUR SCORE ${correctAnswerAmount}/${questions.length}</span>
      <button class="btn btn-primary" onclick="resetGame()">Spiel wiederholen</button>
    </div>
   `;
 }


 function resetGame(){
   currentQuestion = 0;
   shownQuestionNumber = 1;
   correctAnswerAmount = 0;
   document.getElementById('card-right').innerHTML = quizTemplateHTML();
   init();

 }


 function quizTemplateHTML(){
   return ` <h5 class="card-title" id="questionText">Frage</h5>
            <div class="question-container">
               <div class="card question-card mb-3" onclick="answer('answer_1')">
               <div class="card-body" id="answer_1"></div>
               </div>
               <div class="card question-card mb-3" onclick="answer('answer_2')">
               <div class="card-body" id="answer_2"></div>
               </div>
               <div class="card question-card mb-3" onclick="answer('answer_3')">
               <div class="card-body" id="answer_3"></div>
               </div>
               <div class="card question-card mb-3" onclick="answer('answer_4')">
               <div class="card-body" id="answer_4"></div>
               </div>
            </div>
            <div class="card-bottom">
               <div class="card-bottom-left">
               <b id="questionNumber">1</b> von <b id="questionAmount">${questions.length}</b> Fragen
               </div>
               <div class="card-bottom-right">
               <button type="button" disabled id="next-button" onclick="disableButton(); nextQuestion();" class="btn btn-primary">Nächste Frage</button>
               </div>
            </div>
   `;
 }
 
 
 function removeColors() {
   for (let i = 1; i <= 4; i++) {
     const answerNode = document.getElementById('answer_' + i);
     answerNode.parentNode.classList.remove('bg-danger');
     answerNode.parentNode.classList.remove('bg-success');
   }
 }
 