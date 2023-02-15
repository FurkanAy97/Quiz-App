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
       "question":"Welches HTML-Element wird verwendet, um eine geordnete Liste zu erstellen?",
       "answer_1":"<ul>",
       "answer_2":"<li>",
       "answer_3":"<ol>",
       "answer_4":"<dl>",
       "right_answer":3
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
       "question":"Welches HTML-Element wird verwendet, um einen Absatz zu erstellen?",
       "answer_1":"<p>",
       "answer_2":"<br>",
       "answer_3":"<div>",
       "answer_4":"<span>",
       "right_answer":1
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
       "question":"Welches HTML-Element wird verwendet, um eine Tabelle zu erstellen?",
       "answer_1":"<table>",
       "answer_2":"<div>",
       "answer_3":"<p>",
       "answer_4":"<span>",
       "right_answer":1
    }
 ];

 let currentQuestion = 0;

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

 }