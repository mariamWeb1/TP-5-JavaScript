let QUESTIONS = [
    ["Quelle est la Capitale du Maroc ?" , "Rabat"],
    ["5 + 3 = ?" , "8"],
    ["Couleur de l'herbe ?" ,"vert"]
];

function lancerQuiz() {
    let score = 0;

    for (let i = 0; i < QUESTIONS.length; i++) {
        let question = QUESTIONS[i][0];
        let bonneReponse = QUESTIONS[i][1];

        let reponse = prompt(question);

        // comparer en minuscule pour éviter erreurs
        if (reponse.toLowerCase() === bonneReponse) {
            alert("Réponse juste !");
            score++;
        } else {
            alert("Réponse fausse !");
        }
    }

    alert("Vous avez répondu correctement à " + score + " questions sur " + QUESTIONS.length);
}

lancerQuiz();
