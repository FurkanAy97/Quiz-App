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


 function init(){
    document.getElementById('questionAmount').innerHTML = questions.length;
    showQuestion();
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
      document.getElementById('next-button').disabled = false;
   }
 }

 
 function answer(selection){
   let correctAnswer = questions[currentQuestion]['right_answer']
   let selectedAnswerNumber = selection.slice(-1);
   let idOfRightAnswer = `answer_${questions[currentQuestion]['right_answer']}`
   if (selectedAnswerNumber == correctAnswer){
      document.getElementById(selection).parentNode.classList.add("bg-success") 
      correctAnswerAmount++; /* counts the correctly answered questions */
   } else {
      document.getElementById(selection).parentNode.classList.add("bg-danger") 
      document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success") 
   }
   document.getElementById('next-button').disabled = false;
 }


 function disableButton(){
   document.getElementById('next-button').disabled = true;
 }

 function nextQuestion() {
   let questionAmount = document.getElementById('questionAmount').innerHTML
   if (shownQuestionNumber == questionAmount) {
      showResultPage();
   } else {
      if (shownQuestionNumber < questionAmount) {
         currentQuestion++;
         shownQuestionNumber++;
         document.getElementById('questionNumber').innerHTML = shownQuestionNumber;
         removeColors();
         showQuestion();
      }
   }
 }

 function showResultPage(){
   document.getElementById('card-right').innerHTML = ``;
   document.getElementById('card-right').innerHTML = resultPageTemplate();
 }


 function resultPageTemplate(){
   return `
   <div class="result-page">
      <img id="result-img" src="img/brain result.png">
      <h2>COMPLETE HTML QUIZ</h2>
      <span>YOUR SCORE ${correctAnswerAmount}/${questions.length}</span>
    </div>
   `;
 }

 
 function removeColors(){
   document.getElementById('answer_1').parentNode.classList.remove('bg-danger')
   document.getElementById('answer_1').parentNode.classList.remove('bg-success')
   document.getElementById('answer_2').parentNode.classList.remove('bg-danger')
   document.getElementById('answer_2').parentNode.classList.remove('bg-success')
   document.getElementById('answer_3').parentNode.classList.remove('bg-danger')
   document.getElementById('answer_3').parentNode.classList.remove('bg-success')
   document.getElementById('answer_4').parentNode.classList.remove('bg-danger')
   document.getElementById('answer_4').parentNode.classList.remove('bg-success')
 }