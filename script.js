const questions = [
    {
       "question":["Wer hat HTML erfunden?", "Was ist der Zweck von CSS-Selektoren?"],
       "answer_1":["Robbie Williams", "Zum Auswählen von HTML-Elementen"],
       "answer_2":["Lady Gaga", "Zum Formatieren von Text"],
       "answer_3":["Tim Berners-Lee", "Zum Ändern des Verhaltens von Webseiten"],
       "answer_4":["Justin Bieber", "Zum Erstellen von Animationen"],
       "right_answer":[3, 1]
    },
    {
       "question":["Was ist der Zweck des (alt) Attributs in einem (img) Tag?", "Was ist ein Pseudo-Element in CSS?"],
       "answer_1":["Es gibt den Titel des Bildes an", "Ein Element, das auf bestimmte Benutzerinteraktionen wie den Hover-Effekt reagiert."],
       "answer_2":["Es beschreibt den Inhalt des Bildes für Nutzer, die das Bild nicht sehen können", "Ein Element, das durch JavaScript generiert wird."],
       "answer_3":["Es gibt die Abmessungen des Bildes an", "Ein Element, das den Inhalt eines anderen Elements anzeigt."],
       "answer_4":["Es legt fest, ob das Bild horizontal oder vertikal ausgerichtet ist", "Ein Element, das spezielle Effekte wie Schatten oder Hintergrundbilder auf Elemente anwendet."],
       "right_answer":[2, 3]
    },
    {
       "question":["Was ist der Zweck des (head) Elements in HTML??", "Was ist der Zweck von Media Queries in CSS?"],
       "answer_1":["Es definiert den Hauptinhalt der Webseite", "Zum Verstecken von Elementen auf bestimmten Bildschirmgrößen"],
       "answer_2":["Es definiert den Fußbereich der Webseite", "Zum Ändern von Stylesheets auf verschiedenen Bildschirmgrößen"],
       "answer_3":["Es definiert die Navigationsleiste der Webseite", "Zum Ändern von Stylesheets basierend auf dem Betriebssystem des Benutzers"],
       "answer_4":["Es enthält Metadaten über die Webseite, wie z.B. den Titel, die Beschreibung oder die Codierung", "Zum Ändern von Stylesheets basierend auf dem Browser des Benutzers"],
       "right_answer":[4, 2]
    },
    {
       "question":["Was ist der Zweck des (href) Attributs in einem (a) Tag?", "Was ist das Box-Modell in CSS?"],
       "answer_1":["Es gibt den Text an, der beim Klick auf den Link angezeigt wird", "Eine Möglichkeit, verschiedene Layout-Optionen für ein Element anzupassen"],
       "answer_2":["Es gibt den Namen des Links an", "Eine Möglichkeit, die Größe von Elementen relativ zu ihrer Eltern-Container-Größe anzugeben."],
       "answer_3":["Es gibt den Titel des Links an", "Eine Methode zur Berechnung der Größe von HTML-Elementen, die aus Inhalt, Padding, Border und Margin besteht."],
       "answer_4":["Es gibt den Ziel-URL an, auf den der Link verweist", "Eine Möglichkeit, ein Element in einem Webbrowser zu positionieren."],
       "right_answer":[4, 3]
    },
    {
       "question":["Was ist der Zweck des (form) Elements in HTML??", "Was ist der Zweck von (float) in CSS?"],
       "answer_1":["Es definiert den Inhalt der Webseite", "Zum Positionieren von Elementen relativ zu ihrer Eltern-Container-Größe"],
       "answer_2":["Es definiert den Hauptbereich der Webseite", "Zum Anpassen der Größe von Elementen relativ zu ihrem Inhalt."],
       "answer_3":["Es definiert ein Formular, in dem der Nutzer Eingaben tätigen kann", "Zum Hinzufügen von Hintergrundfarben zu Text."],
       "answer_4":["Es definiert eine Tabelle mit Daten", "Zum Verschieben von Elementen zu einem bestimmten Bereich innerhalb ihres Containers."],
       "right_answer":[3, 4]
    },
    {
       "question":["Was ist der Zweck des (title) Attributs in einem (a) Tag?", "Was ist der Zweck von (z-index) in CSS?"],
       "answer_1":["Es gibt den Text an, der beim Klick auf den Link angezeigt wird", "Zum Einstellen der Transparenz eines Elements"],
       "answer_2":["Es gibt den Namen des Links an", "Zum Einstellen der Größe eines Elements relativ zu seinem Container"],
       "answer_3":["Es gibt den Ziel-URL an, auf den der Link verweist", "Zum Einstellen der Reihenfolge der Elemente in Bezug auf die Schichtung auf der Webseite"],
       "answer_4":["Es gibt den Titel des Links an", "Zum Einstellen der Schriftart eines Elements"],
       "right_answer":[4, 3]
    },
    {
       "question":["Was ist der Zweck der HTML-Auszeichnungssprache?", "Welche CSS-Eigenschaft wird verwendet, um den Hintergrund eines Elements zu definieren?"],
       "answer_1":["Es definiert eine Tabelle mit Daten", "background-color"],
       "answer_2":["Sie beschreibt, wie die Inhalte auf der Webseite angezeigt werden sollen", "text-color"],
       "answer_3":["Sie ermöglicht es, interaktive Elemente auf der Webseite einzubinden", "border-color"],
       "answer_4":["Sie sorgt dafür, dass die Webseite auf allen Geräten und in allen Browsern gleich dargestellt wird", "font-color"],
       "right_answer":[2, 1]
    }
 ];

 
 let currentQuestion = 0;
 let currentCategorie = 0;
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
    document.getElementById('questionText').innerHTML = question['question'][currentCategorie];
    document.getElementById('answer_1').innerHTML = `<div class="question-letter"><b>A</b></div>` + question['answer_1'][currentCategorie];
    document.getElementById('answer_2').innerHTML = `<div class="question-letter"><b>B</b></div>` + question['answer_2'][currentCategorie];
    document.getElementById('answer_3').innerHTML = `<div class="question-letter"><b>C</b></div>` + question['answer_3'][currentCategorie];
    document.getElementById('answer_4').innerHTML = `<div class="question-letter"><b>D</b></div>` + question['answer_4'][currentCategorie];
    checkIfLastQuestion();
 }


 function checkIfLastQuestion(){
   let questionAmount = document.getElementById('questionAmount').innerHTML
   if (shownQuestionNumber == questionAmount) {
      document.getElementById('next-button').innerHTML = `Ergebniss`;
   }
 }

 
 function answer(selection){
   let correctAnswer = questions[currentQuestion]['right_answer'][currentCategorie]
   let selectedAnswerNumber = selection.slice(-1);
   let idOfRightAnswer = `answer_${questions[currentQuestion]['right_answer'][currentCategorie]}`
   
   if (selectedAnswerNumber == correctAnswer){     /* checks if answer is correct */
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
   disableAnswers();
 }


 function disableAnswers() {
   for (let i = 1; i <= 4; i++) {
     const answerNode = document.getElementById('answer_' + i);
     answerNode.parentNode.style.setProperty('pointer-events', 'none');
   }
 }


 function enableAnswers(){
   for (let i = 1; i <= 4; i++) {
      const answerNode = document.getElementById('answer_' + i);
      answerNode.parentNode.style.setProperty('pointer-events', 'auto');
    }
 }
 


 function wrongAnswer(selection, idOfRightAnswer){
   document.getElementById(selection).parentNode.classList.add("bg-danger") 
   document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success") 
   AUDIO_FAIL.play();
   disableAnswers();
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
   enableAnswers();
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
   return ` <div class="category-buttons-mobile">
               <a href="#" onclick="changeToHTML()">HTML</a>
               <a href="#" onclick="changeToCSS()">CSS</a>
            </div>
            <h5 class="card-title" id="questionText">Frage</h5>
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
                  <b id="questionNumber">1</b> von <b id="questionAmount">5</b> Fragen
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
 

 function changeToHTML(){
   currentCategorie = 0;
   resetGame();
   showQuestion();
 }


 function changeToCSS(){
   currentCategorie = 1;
   resetGame();
   showQuestion();
 }