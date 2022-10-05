// var fs = require('fs');
// var files = fs.readdirSync('./assets/cards/');
// console.log(files);

/* Adding the script tag to the head as suggested before */

var cards = [
    "058e4bfc-9f3a-46bc-a9ba-3b9895fd7850.jpg",
    "0cf5227a-36ca-4c4c-8e61-e37bf92d41fd.jpg",
    "136f72e2-0b39-4241-bd89-1dc41af79efe.jpg",
    "14e5d253-e075-4df4-98af-4ae43c000634.jpg",
    "170ee3d9-f7a2-4b45-bab1-4054c0ed8f9b.jpg",
    "17b941e9-5dcc-473e-a461-709d74e32a3c.jpg",
    "1812bb11-0643-4559-81d0-74731b2a25fb.jpg",
    "1bf33ac0-772e-45f9-ae69-9f6d5938bcfa.jpg",
    "1f17ac75-8e49-42a3-8a31-2e2d5f65316e.jpg",
    "1f4f7e7d-a7e0-4b1e-89e4-c2a6b903d784.jpg",
    "215b1959-8807-4160-b8ef-d363970bf068.jpg",
    "2af68abe-606d-467f-b38f-7604c05a3139.jpg",
    "382e7dfd-1e9a-4638-9543-10f704fbd2ae.jpg",
    "3c05afe6-c92f-440d-b09a-cc23b15da495.jpg",
    "438cab33-ffb1-4fba-8c2a-2c91fd39b9a2.jpg",
    "443e311e-e78f-44ab-bb6d-f1f6227deed9.jpg",
    "48942e5b-33ab-452e-96d2-8834af1bb697.jpg",
    "48d8a236-4a89-43ed-8e2b-464770a474b0.jpg",
    "51e81334-8a14-40d3-aadb-9137227a0dea.jpg",
    "59c34f7e-bc72-47d1-a61a-ec9b94af47b7.jpg",
    "5b42e4a9-4944-4511-a7e3-ac15e03463a9.jpg",
    "5ee25726-12a9-4fe1-ae9f-60d3ad644439.jpg",
    "5fedc387-8479-4bff-9378-93789f3ce8a0.jpg",
    "6140a08a-be62-460a-a85a-5caa3d88bf29.jpg",
    "62485ec5-9667-4e3c-acb2-482c4eacdf8e.jpg",
    "62902518-c284-4842-995c-9b4eba2427ec.jpg",
    "62e12aa1-873b-4983-8675-760b3100e254.jpg",
    "64d3c5aa-1fc9-4ec4-b876-21c24e36c5a7.jpg",
    "67098362-47be-4c5d-8189-6bf4e6807f06.jpg",
    "6fdcf1f6-6cb5-467e-90ed-66d7c51ff485.jpg",
    "79610a3e-7e54-4dad-85b4-96a8773e6c99.jpg",
    "7b149aac-b827-4f0b-a8de-0051777bd90e.jpg",
    "8132c357-a770-4bbc-a074-772af3732110.jpg",
    "873ea66b-030f-4a3f-ab74-b2e7d135f1bd.jpg",
    "88bb31fb-e7df-47e2-88dc-18a29ea8ee98.jpg",
    "8e6c64f4-529b-4ee2-a2d9-ee0b2041f4f0.jpg",
    "9154812b-1716-4862-a176-9a11111ed12f.jpg",
    "98b5350a-5279-4290-b969-654a79b43baf.jpg",
    "9badcc58-0281-499c-9e1f-5d894761ca61.jpg",
    "9d27c789-b5b2-419e-a899-cf48e89b4701.jpg",
    "9fa84eeb-f8bc-4a72-93b2-1e12652f6885.jpg",
    "9fdda372-05b0-47ca-ac74-713037bcac17.jpg",
    "a7fef31b-1dcb-4b87-b0da-e942571efe2b.jpg",
    "a92f4ac3-c179-4adb-9836-de95dac0f6b6.jpg",
    "ab9016e5-f64f-4574-bf30-da0456b1ddec.jpg",
    "aea1a231-03d2-4f75-8a43-c5e38ea0dae7.jpg",
    "b7354c62-f79c-43d5-9c6e-270f35a77ee4.jpg",
    "bd7e0cdb-9239-4b29-935d-df0ded1bb217.jpg",
    "c00f6b2c-8340-4b22-9553-252bb2905c6e.jpg",
    "c07620a1-dc3f-49a7-b2e9-aaff19faa85a.jpg",
    "c5287e77-890d-41bd-acc6-7a8f1866426d.jpg",
    "c6f67230-8208-4a77-af66-661de044e188.jpg",
    "c8bd9f72-466c-4c31-9d32-429b9985a9fb.jpg",
    "ca36efdd-c60c-412c-9fd5-5e6b97d2f9cd.jpg",
    "d074f128-db41-4f6f-8a4e-1c5bb010695e.jpg",
    "d5e0c5aa-af7f-4a6c-a04d-8c890c0c5d75.jpg",
    "d65edf9e-a859-4314-9e04-0c1d15f1dd39.jpg",
    "d6c88092-6a6a-4177-9dc5-18627b85a084.jpg",
    "da7a8704-c7a1-4552-bed2-ad61ce41829c.jpg",
    "ddd87e69-e660-4ce7-8953-344e2602a999.jpg",
    "e36b3b7c-636f-407c-befa-43d445d1fd5f.jpg",
    "e5d3a1cd-d6cd-48ed-b6b3-35cf8e193832.jpg",
    "e7d19c43-8c8d-404f-a7e7-b5205045b3b0.jpg",
    "ef43192f-4e83-4ffc-a932-4ecf211b4a4a.jpg",
    "f008b858-033f-43c2-a8ca-87b5ba41658f.jpg",
    "f0349a40-d7c9-429e-99d3-709883712c8c.jpg",
    "f0c1a965-eca8-4444-bda8-8e4e54a0267d.jpg",
    "fee17785-2a29-4998-a34e-b738de955d53.jpg",
    "fefabce3-1384-442c-a6f8-d1e205023c11.jpg",
    "arms_outstretched.jpg",
    "roller_lobster.png",
    "ffedba3e-8e4b-430c-8428-170d393918cf.jpg"
]
var deck = [];
var discard = [];
var deckSize = 70;
var jumpscare = new Audio('./assets/lobster.mp3');
var selectedCard;

function startup() {
    //document.getElementById("deck").addEventListener("onClick", drawCard);
    initDeck();
}

function initDeck() {
    deck.push("card_back.png");
    for (var i = 0; i < deckSize; i++) {
        // pick one
        selectedCard = cards[Math.floor(Math.random() * cards.length)];
        if (deck.includes(selectedCard)) {
            i--
            continue;
        }
        deck.push(selectedCard);
    }
    deck.push("card_back.png");
    console.log(deck);
}

function drawCard() {
    console.log(deck);
    jumpscare.pause();
    jumpscare.currentTime = 1;
    if (document.getElementById("deck").src == "./assets/cards/card_back.png" || deck.length <= 1) {
        deck.pop();
        console.log("Shuffling...");
        shuffleDeck();
        console.log("Shuffled:");
        console.log(deck);
    } else {
        var bottomCard = deck.shift();
        console.log("Discarded: " + bottomCard);
        discard.push(bottomCard);
        console.log("Displaying: " + deck[0]);
        displayTopCard();
    }
}

function displayTopCard() {
    document.getElementById("deck").src = "./assets/cards/" + deck[0];

    if (deck[0] == "arms_outstretched.jpg" || deck[0] == "roller_lobster.png") {
        jumpscare.play();
        console.log("boo");
    }
}

function shuffleDeck() {
    deck = [];
    $("#cardback").closest('.flip-container').toggleClass('clicked');
    $("#cardback").css('transform, rotateY(180deg)');
    shuffle(discard);
    while (discard.length > 0) {
        var toMove = discard.shift();
        if (toMove != "card_back.png") {
            deck.push(toMove);
        }
    }
    deck.unshift("card_back.png");
}

function toggleFlip() {
    //document.getElementById("flipper").classList.toggle("toggleFlip");
}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }