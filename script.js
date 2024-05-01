let player1Name = '';
let player2Name = '';
let player3Name = '';
let player4Name = '';
let currentPlayer = 1; // Initialisiere currentPlayer mit 1

// Verstecke den "Karte ziehen" Button zu Beginn
document.getElementById("drawCardButton").style.display = "none";

// Variable für die Anzahl der aktiven Spieler
let activePlayersCount = 0;

// Funktion zum Aktualisieren der Anzeige des aktuellen Spielers
function updateCurrentPlayerDisplay() {
    let playerName = '';
    switch (currentPlayer) {
        case 1:
            playerName = player1Name;
            break;
        case 2:
            playerName = player2Name;
            break;
        case 3:
            playerName = player3Name;
            break;
        case 4:
            playerName = player4Name;
            break;
    }
    document.getElementById('currentPlayerName').textContent = playerName;
}
function showCustomPopup(message) {
    const popup = document.createElement("div");
    popup.classList.add("custom-popup");

    // Schließ-Button hinzufügen
    const closeButton = document.createElement("span");
    closeButton.textContent = "X";
    closeButton.classList.add("close-button");

    // Klickevent für den Schließ-Button
    closeButton.onclick = function() {
        closePopup(popup);
    };

    // Füge den Schließ-Button zum Popup hinzu
    popup.appendChild(closeButton);

    // Füge die Nachricht zum Popup hinzu
    const messageText = document.createElement("p");
    messageText.textContent = message;
    popup.appendChild(messageText);

    // Füge das Popup zum Body hinzu
    document.body.appendChild(popup);

    // Automatisches Schließen des Popups nach 2 Minuten
    const timeoutId = setTimeout(() => {
        closePopup(popup);
    }, 120000); // 120000 Millisekunden entsprechen 2 Minuten

    function closePopup(popupElement) {
    clearTimeout(timeoutId); // Verhindere das automatische Schließen, falls manuell geschlossen wird
    document.body.removeChild(popupElement);
    document.getElementById('drawCardButton').style.display = "block";

    // Wechsle zum nächsten Spieler
    currentPlayer = (currentPlayer % activePlayersCount) + 1; // Gehe von Spieler 1 zu 2 zu 3 zu 4 und wieder zu 1
    updateCurrentPlayerDisplay(); // Aktualisiere die Anzeige für den aktuellen Spieler nach Schließen des Popups
}

   
}
function showCustomPopups(message) {
    const popup = document.createElement("div");
    popup.classList.add("custom-popup-lila");

    // Schließ-Button hinzufügen
    const closeButton = document.createElement("span");
    closeButton.textContent = "X";
    closeButton.classList.add("close-button");

    // Klickevent für den Schließ-Button
    closeButton.onclick = function() {
        closePopup(popup);
    };

    // Füge den Schließ-Button zum Popup hinzu
    popup.appendChild(closeButton);

    // Füge die Nachricht zum Popup hinzu
    const messageText = document.createElement("p");
    messageText.textContent = message;
    popup.appendChild(messageText);

    // Füge das Popup zum Body hinzu
    document.body.appendChild(popup);

    // Automatisches Schließen des Popups nach 2 Minuten
    const timeoutId = setTimeout(() => {
        closePopup(popup);
    }, 120000); // 120000 Millisekunden entsprechen 2 Minuten

    function closePopup(popupElement) {
    clearTimeout(timeoutId); // Verhindere das automatische Schließen, falls manuell geschlossen wird
    document.body.removeChild(popupElement);
    document.getElementById('drawCardButton').style.display = "block";

    // Wechsle zum nächsten Spieler
    currentPlayer = (currentPlayer % activePlayersCount) + 1; // Gehe von Spieler 1 zu 2 zu 3 zu 4 und wieder zu 1
    updateCurrentPlayerDisplay(); // Aktualisiere die Anzeige für den aktuellen Spieler nach Schließen des Popups
}

   
}
  const cards = ['img/card1.gif', 'img/card2.gif', 'img/card3.gif', 'img/card4.gif',
    'img/card5.gif', 'img/card6.gif', 'img/card7.gif', 'img/card8.gif', 'img/card9.gif',
    'img/card10.gif', 'img/card11.gif', 'img/card12.gif', 'img/card13.gif', 'img/card14.gif',
    'img/card15.gif', 'img/card16.gif', 'img/card17.gif', 'img/card18.gif', 'img/card19.gif',
    'img/card20.gif', 'img/card21.gif', 'img/card22.gif', 'img/card23.gif', 'img/card24.gif',
    'img/card25.gif', 'img/card26.gif', 'img/card27.gif', 'img/card28.gif', 'img/card29.gif',
    'img/card30.gif', 'img/card31.gif', 'img/card32.gif'];
        const tasks = ['Aufgabe: Zeige deinen Arsch', 'Aufgabe: Stecke den Finger in den Arsch',
		'Aufgabe: Spiele mit deinem Geschlechtsteil','Aufgabe: Nimm einen Schwanz bis zum Anschlag in den Mund',
		'Aufgabe: Sauge einem die Eier','Aufgabe: Lass dir  einen Finger in den Arsch schieben',
		'Aufgabe: Lass dich 3 min mit Dildo in den Arsch ficken','Aufgabe: Lasse dir Wäsche-Klammern an die Nippel setzen',
		'Aufgabe: Lasse dir Wachs auf den Körper tropfen','Aufgabe:	5 Schläge mit der Hand auf deinen Arsch schlagen  lassen',
		'Aufgabe: Lass dir in den Mund pissen','Aufgabe: Leck für 3 min ein Arschloch', 'Aufgabe: Wünsch dir was',
		'Aufgabe: Küss die Füße', 'Aufgabe: Such im Netz einen Porno und stell die Szene nach', 'Aufgabe: Lecke eine Stelle deiner Wahl',
		'Aufgabe: Lass dich 3 Minuten mit dem Vibrator verwöhnen', 'Aufgabe:Lass dich 3 Minuten von der Fickmaschine oder deinem Partner in den Arsch ficken',
		'Aufgabe: Blase oder Lecke 3 Minuten am Geschlechtsteil eines anderen', 'Aufgabe: Lecke nir mit der Zungenspitze eine Eichel oder Kitzler',
		'Aufgabe: Küsse Intensiv mit Zunge so tief es geht', 'Aufgabe: Sauge 2 Minuten an den Nippel deiner Wahl',
		'Aufgabe: Lass dir die Händefesseln bis zur Rosen Dame', 'Aufgabe: Lass dir einen Katheter setzen und trage ihn 24 Stunden',
		' Aufgabe: Lass dir Klammern an Scharmlippen oder Sack setzen', 'Aufgabe: Leg dich breitbeinig hin und lass für 5 Minuten alles über dich ergehen',
		'Aufgabe: Dom, schlage! Sub: lass dich schlagen! 10 Schlage mit dem Werkzeug deiner Wahl'];

        

    // Event-Listener für den Start-Button
document.getElementById('startButton').addEventListener('click', () => {
    // Namen aus den Eingabefeldern holen
    player1Name = document.getElementById('player1Name').value.trim();
    player2Name = document.getElementById('player2Name').value.trim();
    player3Name = document.getElementById('player3Name').value.trim();
    player4Name = document.getElementById('player4Name').value.trim();

    // Zähle die Anzahl der aktiven Spieler
    activePlayersCount = [player1Name, player2Name, player3Name, player4Name].filter(name => name !== '').length;


    document.getElementById("drawCardButton").style.display = "block";
    document.getElementById("startButton").style.display = "none";

    currentPlayer = 1; // Starte mit Spieler 1
    updateCurrentPlayerDisplay(); // Aktualisiere die Anzeige für den aktuellen Spieler
});
	document.getElementById('drawCardButton').addEventListener('click', () => {
    const randomCardIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomCardIndex];
    document.getElementById('card').innerHTML = `<img src="${randomCard}" alt="Gezogene Karte">`;

    // Prüfe, ob eine spezielle Karte gezogen wurde und zeige ein Popup mit einer Aufgabe
    if ([11, 10, 18, 17, 25, 24, 32, 31].includes(randomCardIndex + 1)) { // Indizes angepasst für 0-basierte Arrays
        const randomTaskIndex = Math.floor(Math.random() * tasks.length);
        const randomTask = tasks[randomTaskIndex];
        showCustomPopups(randomTask ); // Füge die lila Klasse hinzu
        document.getElementById('drawCardButton').style.display = "none";
	}
    // Prüfe, ob eine spezielle Karte gezogen wurde und zeige ein Popup mit einer Aufgabe
    if ([5, 6,  12, 13, 19, 20, 26, 27].includes(randomCardIndex + 1)) { // Index +1 da Karten bei 1 beginnen
        const randomTaskIndex = Math.floor(Math.random() * tasks.length);
        const randomTask = tasks[randomTaskIndex];

        showCustomPopup(randomTask);

        // Verstecke den Zieh-Knopf während das Popup angezeigt wird
        document.getElementById('drawCardButton').style.display = "none";
    } else {
       // Wechsle zum nächsten Spieler basierend auf der Anzahl der aktiven Spieler
    currentPlayer = (currentPlayer % activePlayersCount) + 1; // Gehe von Spieler 1 zu 2 zu 3 zu 4 und wieder zu 1
        updateCurrentPlayerDisplay();
    }
});