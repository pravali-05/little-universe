// =========================================
// GET MAIN ELEMENTS
// =========================================

const enterBtn =
    document.getElementById("enterBtn");

const introScreen =
    document.getElementById("introScreen");

const universeScreen =
    document.getElementById("universeScreen");


// =========================================
// BACKGROUND STARS
// =========================================

function createBackgroundStars() {

    // Prevent duplicate background stars
    const oldStars =
        document.querySelector(".background-stars");

    if (oldStars) {
        oldStars.remove();
    }

    const container =
        document.createElement("div");

    container.classList.add(
        "background-stars"
    );

    for (let i = 0; i < 100; i++) {

        const star =
            document.createElement("span");

        star.classList.add(
            "tiny-star"
        );

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        container.appendChild(star);
    }

    introScreen.appendChild(container);
}


// =========================================
// ENTER UNIVERSE
// =========================================

if (enterBtn) {

    enterBtn.addEventListener(
        "click",
        function () {

            introScreen.style.opacity = "0";

            setTimeout(
                function () {

                    introScreen.style.display =
                        "none";

                    universeScreen.classList.add(
                        "active"
                    );

                    createStars();

                },
                1500
            );

        }
    );

}


// =========================================
// STAR DATA
// =========================================

const starData = [

    // STAR 1
    {
        number: 1,
        type: "puzzle"
    },


    // STAR 2
    {
        number: 2,
        type: "choice",

        title:
            "💙 Friendship Question",

        question:
            "Where would I choose for us to meet someday?",

        optionA:
            "Delhi",

        optionB:
            "Hyderabad",

        correct:
            "B"
    },


    // STAR 3
    {
        number: 3,
        type: "choice",

        title:
            "💬 One Little Preference",

        question:
            "What would I prefer?",

        optionA:
            "Calling 📞",

        optionB:
            "Texting 💬",

        correct:
            "B"
    },


    // STAR 4
    {
        number: 4,
        type: "written",

        title:
            "🧠 Something You Remember",

        question:
            "What is something I told you that you still remember?"
    },


    // STAR 5
    {
        number: 5,
        type: "choice",

        title:
            "💌 A Little Gift",

        question:
            "What would I choose as a gift?",

        optionA:
            "A handwritten letter 💌",

        optionB:
            "A cute surprise 🎁",

        correct:
            "A"
    },


    // STAR 6
    {
        number: 6,
        type: "choice",

        title:
            "🌙 Our Conversations",

        question:
            "What would I choose?",

        optionA:
            "Morning conversations ☀️",

        optionB:
            "Late-night conversations 🌙",

        correct:
            "B"
    },


    // STAR 7
    {
        number: 7,
        type: "written",

        title:
            "💭 One Thing You Remember",

        question:
            "What is one thing I always ask you before you leave?"
    },


    // STAR 8
    {
        number: 8,
        type: "choice",

        title:
            "🌊 A Trip Together",

        question:
            "What would I choose for a trip?",

        optionA:
            "Beach 🌊",

        optionB:
            "Temple 🛕",

        correct:
            "A"
    }

];


// =========================================
// CREATE NUMBERED STARS
// =========================================

function createStars() {

    const starsContainer =
        document.querySelector(".stars");

    if (!starsContainer) {
        return;
    }

    starsContainer.innerHTML = "";

    const starPositions = [

        {
            top: "15%",
            left: "20%"
        },

        {
            top: "25%",
            left: "75%"
        },

        {
            top: "40%",
            left: "10%"
        },

        {
            top: "70%",
            left: "20%"
        },

        {
            top: "75%",
            left: "80%"
        },

        {
            top: "30%",
            left: "90%"
        },

        {
            top: "85%",
            left: "50%"
        },

        {
            top: "15%",
            left: "55%"
        }

    ];


    starData.forEach(
        function (data, index) {

            const star =
                document.createElement("div");

            star.classList.add(
                "star"
            );

            star.innerHTML =
                "★";

            star.setAttribute(
                "data-number",
                data.number
            );

            star.style.top =
                starPositions[index].top;

            star.style.left =
                starPositions[index].left;

            star.style.animationDelay =
                `${index * 0.4}s`;


            // STAR CLICK
            star.addEventListener(
                "click",
                function () {

                    const rect =
                        star.getBoundingClientRect();

                    const sparkleSymbols = [
                        "✨",
                        "💫",
                        "⭐",
                        "💖"
                    ];


                    sparkleSymbols.forEach(
                        function (
                            symbol,
                            sparkleIndex
                        ) {

                            const sparkle =
                                document.createElement(
                                    "span"
                                );

                            sparkle.className =
                                "star-sparkle";

                            sparkle.innerHTML =
                                symbol;

                            sparkle.style.left =
                                (
                                    rect.left +
                                    rect.width / 2
                                ) + "px";

                            sparkle.style.top =
                                (
                                    rect.top +
                                    rect.height / 2
                                ) + "px";


                            const direction =
                                sparkleIndex % 2 === 0
                                    ? 1
                                    : -1;


                            sparkle.style.setProperty(
                                "--move-x",
                                (
                                    direction *
                                    (
                                        20 +
                                        Math.random() * 35
                                    )
                                ) + "px"
                            );


                            sparkle.style.setProperty(
                                "--move-y",
                                (
                                    -20 -
                                    Math.random() * 40
                                ) + "px"
                            );


                            document.body.appendChild(
                                sparkle
                            );


                            setTimeout(
                                function () {

                                    sparkle.remove();

                                },
                                800
                            );

                        }
                    );


                    // OPEN PUZZLE
                    if (data.type === "puzzle") {

                        openPuzzle();

                    }

                    // OPEN QUESTION
                    else {

                        openQuestion(data);

                    }

                }
            );


            starsContainer.appendChild(
                star
            );

        }
    );

}


// =========================================
// QUESTION ELEMENTS
// =========================================

const questionModal =
    document.getElementById(
        "questionModal"
    );

const questionTitle =
    document.getElementById(
        "questionTitle"
    );

const questionText =
    document.getElementById(
        "questionText"
    );

const optionContainer =
    document.getElementById(
        "optionContainer"
    );

const optionA =
    document.getElementById(
        "optionA"
    );

const optionB =
    document.getElementById(
        "optionB"
    );

const writtenAnswerContainer =
    document.getElementById(
        "writtenAnswerContainer"
    );

const questionAnswer =
    document.getElementById(
        "questionAnswer"
    );

const submitAnswer =
    document.getElementById(
        "submitAnswer"
    );

const questionResult =
    document.getElementById(
        "questionResult"
    );

const closeQuestion =
    document.getElementById(
        "closeQuestion"
    );


// =========================================
// RESULT POPUP ELEMENTS
// =========================================

const resultPopup =
    document.getElementById(
        "resultPopup"
    );

const resultSticker =
    document.getElementById(
        "resultSticker"
    );

const resultTitle =
    document.getElementById(
        "resultTitle"
    );

const resultMessage =
    document.getElementById(
        "resultMessage"
    );

const resultContinue =
    document.getElementById(
        "resultContinue"
    );

let popupCallback = null;


// =========================================
// CURRENT QUESTION
// =========================================

let currentQuestion = null;


// =========================================
// OPEN QUESTION
// =========================================

function openQuestion(data) {

    currentQuestion = data;

    questionTitle.innerHTML =
        data.title;

    questionText.innerHTML =
        data.question;

    questionResult.innerHTML =
        "";

    questionModal.classList.add(
        "active"
    );


    // CHOICE QUESTION

    if (data.type === "choice") {

        optionContainer.style.display =
            "flex";

        writtenAnswerContainer.style.display =
            "none";

        optionA.innerHTML =
            "A) " + data.optionA;

        optionB.innerHTML =
            "B) " + data.optionB;

    }


    // WRITTEN QUESTION

    else if (data.type === "written") {

        optionContainer.style.display =
            "none";

        writtenAnswerContainer.style.display =
            "block";

        questionAnswer.value =
            "";

        setTimeout(
            function () {

                questionAnswer.focus();

            },
            200
        );

    }

}


// =========================================
// CHECK A/B ANSWER
// =========================================

function checkChoice(answer) {

    if (!currentQuestion) {
        return;
    }


    // CORRECT ANSWER

    if (
        answer ===
        currentQuestion.correct
    ) {

        questionModal.classList.remove(
            "active"
        );

        resultPopup.classList.remove(
            "sad"
        );


        // STAR 8
        if (
            currentQuestion.number === 8
        ) {

            showResultPopup(

                "🥳",

                "HYY! You got it! 💖",

                "You found all the stars! ✨",

                function () {

                    resultPopup.classList.remove(
                        "active"
                    );

                    universeScreen.classList.remove(
                        "active"
                    );

                    openMemoryGallery();

                }

            );

        }


        // OTHER QUESTIONS
        else {

            showResultPopup(

                "🥳",

                "HYY! You got it! 💖",

                "I knew you would remember! ✨",

                function () {

                    resultPopup.classList.remove(
                        "active"
                    );

                    openQuestion(
                        currentQuestion
                    );

                }

            );

        }

    }


    // WRONG ANSWER

    else {

        resultPopup.classList.add(
            "sad"
        );

        showResultPopup(

            "😭",

            "Awww... not this one 🥺",

            "Try again! You know this one! 💭",

            null

        );

    }

}


// =========================================
// OPTION A
// =========================================

if (optionA) {

    optionA.onclick =
        function () {

            optionA.classList.remove(
                "selected"
            );

            void optionA.offsetWidth;

            optionA.classList.add(
                "selected"
            );


            setTimeout(
                function () {

                    checkChoice("A");

                },
                250
            );

        };

}


// =========================================
// OPTION B
// =========================================

if (optionB) {

    optionB.onclick =
        function () {

            optionB.classList.remove(
                "selected"
            );

            void optionB.offsetWidth;

            optionB.classList.add(
                "selected"
            );


            setTimeout(
                function () {

                    checkChoice("B");

                },
                250
            );

        };

}


// =========================================
// WRITTEN ANSWER
// =========================================

if (submitAnswer) {

    submitAnswer.addEventListener(
        "click",
        function () {

            const answer =
                questionAnswer.value.trim();


            if (answer === "") {

                questionResult.innerHTML =
                    "💭 Write something first...";

                return;

            }


            questionModal.classList.remove(
                "active"
            );


            showResultPopup(

                "🥳",

                "HYY! You got it! 💖",

                "That's the answer I was waiting for! ✨",

                null

            );

        }
    );

}


// =========================================
// RESULT POPUP
// =========================================

function showResultPopup(
    sticker,
    title,
    message,
    callback
) {

    resultSticker.innerHTML =
        sticker;

    resultTitle.innerHTML =
        title;

    resultMessage.innerHTML =
        message;

    popupCallback =
        callback;


    resultPopup
        .querySelectorAll(
            ".floating-decoration"
        )
        .forEach(
            function (item) {

                item.remove();

            }
        );


    let decorations;


    // SAD
    if (
        resultPopup.classList.contains(
            "sad"
        )
    ) {

        decorations = [

            "💧",
            "🥺",
            "💭",
            "💧",
            "😢",
            "💭"

        ];

    }


    // HAPPY
    else {

        decorations = [

            "💖",
            "✨",
            "💕",
            "⭐",
            "💗",
            "🌟",
            "💙",
            "✨"

        ];

    }


    decorations.forEach(
        function (
            symbol,
            index
        ) {

            const decoration =
                document.createElement(
                    "span"
                );

            decoration.className =
                "floating-decoration";

            decoration.innerHTML =
                symbol;

            decoration.style.left =
                (
                    8 +
                    Math.random() * 84
                ) + "%";

            decoration.style.top =
                (
                    20 +
                    Math.random() * 65
                ) + "%";

            decoration.style.animationDelay =
                (
                    index * 0.18
                ) + "s";

            decoration.style.animationDuration =
                (
                    2.5 +
                    Math.random() * 1.5
                ) + "s";


            resultPopup.appendChild(
                decoration
            );

        }
    );


    resultPopup.classList.add(
        "active"
    );

}


// =========================================
// RESULT CONTINUE
// =========================================

if (resultContinue) {

    resultContinue.addEventListener(
        "click",
        function () {

            resultPopup.classList.remove(
                "active"
            );


            const callback =
                popupCallback;

            popupCallback =
                null;


            if (callback) {

                callback();

            }

        }
    );

}


// =========================================
// CLOSE QUESTION
// =========================================

if (closeQuestion) {

    closeQuestion.addEventListener(
        "click",
        function () {

            questionModal.classList.remove(
                "active"
            );

        }
    );

}


// =========================================
// PUZZLE ELEMENTS
// =========================================

const puzzleModal =
    document.getElementById(
        "puzzleModal"
    );

const puzzle =
    document.getElementById(
        "puzzle"
    );

const puzzleStatus =
    document.getElementById(
        "puzzleStatus"
    );

const closePuzzle =
    document.getElementById(
        "closePuzzle"
    );


// =========================================
// PUZZLE VARIABLES
// =========================================

let selectedPiece = null;

let moves = 0;

let puzzleSolved = false;


// =========================================
// OPEN PUZZLE
// =========================================

function openPuzzle() {

    if (!puzzleModal) {
        return;
    }

    puzzleModal.classList.add(
        "active"
    );

    createPuzzle();

}


// =========================================
// CLOSE PUZZLE
// =========================================

if (closePuzzle) {

    closePuzzle.addEventListener(
        "click",
        function () {

            puzzleModal.classList.remove(
                "active"
            );

        }
    );

}


// =========================================
// CREATE PUZZLE
// =========================================

function createPuzzle() {

    if (!puzzle) {
        return;
    }

    puzzle.innerHTML =
        "";

    puzzle.classList.remove(
        "unlocked"
    );

    selectedPiece =
        null;

    moves =
        0;

    puzzleSolved =
        false;


    let pieces = [

        0, 1, 2,
        3, 4, 5,
        6, 7, 8

    ];


    do {

        pieces.sort(
            function () {

                return Math.random() - 0.5;

            }
        );

    }

    while (
        isSolved(pieces)
    );


    pieces.forEach(
        function (
            pieceNumber,
            position
        ) {

            const piece =
                document.createElement(
                    "div"
                );

            piece.classList.add(
                "puzzle-piece"
            );

            piece.dataset.piece =
                pieceNumber;

            piece.dataset.position =
                position;


            setPieceImage(
                piece,
                pieceNumber
            );


            piece.addEventListener(
                "click",
                function () {

                    selectPiece(
                        piece
                    );

                }
            );


            puzzle.appendChild(
                piece
            );

        }
    );


    updateStatus();

}


// =========================================
// SET PUZZLE IMAGE
// =========================================

function setPieceImage(
    piece,
    pieceNumber
) {

    const row =
        Math.floor(
            pieceNumber / 3
        );

    const column =
        pieceNumber % 3;


    const x =
        column * 50;

    const y =
        row * 50;


    piece.style.backgroundPosition =
        `${x}% ${y}%`;

}


// =========================================
// SELECT PUZZLE PIECE
// =========================================

function selectPiece(piece) {

    if (puzzleSolved) {
        return;
    }


    if (
        selectedPiece === null
    ) {

        selectedPiece =
            piece;

        piece.classList.add(
            "selected"
        );

        puzzleStatus.innerHTML =
            "✨ Now choose another piece";

        return;

    }


    if (
        selectedPiece === piece
    ) {

        piece.classList.remove(
            "selected"
        );

        selectedPiece =
            null;

        updateStatus();

        return;

    }


    piece.classList.add(
        "swapping"
    );

    selectedPiece.classList.add(
        "swapping"
    );


    setTimeout(
        function () {

            swapPieces(
                selectedPiece,
                piece
            );


            selectedPiece.classList.remove(
                "selected"
            );

            selectedPiece.classList.remove(
                "swapping"
            );

            piece.classList.remove(
                "swapping"
            );


            selectedPiece =
                null;

            moves++;


            updateStatus();

            checkPuzzle();

        },
        250
    );

}


// =========================================
// SWAP PUZZLE PIECES
// =========================================

function swapPieces(
    piece1,
    piece2
) {

    const temp =
        piece1.dataset.piece;


    piece1.dataset.piece =
        piece2.dataset.piece;

    piece2.dataset.piece =
        temp;


    setPieceImage(
        piece1,
        Number(
            piece1.dataset.piece
        )
    );


    setPieceImage(
        piece2,
        Number(
            piece2.dataset.piece
        )
    );

}


// =========================================
// CHECK PUZZLE
// =========================================

function checkPuzzle() {

    if (!puzzle) {
        return;
    }


    const pieces =
        Array.from(
            puzzle.children
        );


    let correct =
        true;


    pieces.forEach(
        function (
            piece,
            index
        ) {

            const pieceNumber =
                Number(
                    piece.dataset.piece
                );


            if (
                pieceNumber !== index
            ) {

                correct =
                    false;

            }

        }
    );


    if (correct) {

        puzzleSolved =
            true;

        puzzleStatus.innerHTML =
            "🎉 ✨ Puzzle Solved! ✨ 🎉";


        setTimeout(
            function () {

                showMemoryUnlocked();

            },
            1000
        );

    }

}


// =========================================
// PUZZLE STATUS
// =========================================

function updateStatus() {

    if (puzzleSolved) {
        return;
    }


    if (puzzleStatus) {

        puzzleStatus.innerHTML =
            `🧩 Moves: ${moves} — Click any 2 pieces to swap`;

    }

}


// =========================================
// CHECK IF PUZZLE IS SOLVED
// =========================================

function isSolved(pieces) {

    for (
        let i = 0;
        i < pieces.length;
        i++
    ) {

        if (
            pieces[i] !== i
        ) {

            return false;

        }

    }

    return true;

}


// =========================================
// MEMORY UNLOCKED
// =========================================

function showMemoryUnlocked() {

    if (!puzzle) {
        return;
    }


    const pieces =
        Array.from(
            puzzle.children
        );


    puzzle.classList.add(
        "unlocked"
    );


    pieces.forEach(
        function (piece) {

            piece.classList.add(
                "correct"
            );

        }
    );


    puzzleStatus.innerHTML =
        "✨ MEMORY UNLOCKED ✨" +
        "<br>" +
        "😍 MY FAV ONE 🥰";

}


// =========================================
// CLOSE PUZZLE OUTSIDE
// =========================================

if (puzzleModal) {

    puzzleModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                puzzleModal
            ) {

                puzzleModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// =========================================================
// SPECIAL MEMORY GALLERY 🌌
// =========================================================

const memoryGallery =
    document.getElementById(
        "memoryGallery"
    );

const memoryStars =
    document.getElementById(
        "memoryStars"
    );

const memoryLabel =
    document.getElementById(
        "memoryLabel"
    );

const memoryTitle =
    document.getElementById(
        "memoryTitle"
    );

const memoryVisual =
    document.getElementById(
        "memoryVisual"
    );

const memoryText =
    document.getElementById(
        "memoryText"
    );

const nextMemoryBtn =
    document.getElementById(
        "nextMemoryBtn"
    );


let memoryIndex = 0;


const memories = [

    {
        label:
            "THE BEGINNING",

        title:
            "Two Strangers ✨",

        text:
            "Somewhere in this huge universe, two strangers crossed paths. Neither of us knew that one simple conversation could slowly become something worth remembering. 🌱",

        visual:
            "stars"
    },


    {
        label:
            "THE CONVERSATIONS",

        title:
            "Then We Started Talking 💬",

        text:
            "Random conversations, silly questions, serious talks... somehow there was always something to talk about. And somehow, those little conversations became part of our everyday world. 😂",

        visual:
            "chat"
    },


    {
        label:
            "THE RANDOMNESS",

        title:
            "Our Random Little World 😂",

        text:
            "Some conversations make absolutely no sense... and somehow those are the ones that become the most fun. Random jokes, random topics, random moments — our own little universe. 😭😂",

        visual:
            "random"
    },


    {
        label:
            "SOMEWHERE ALONG THE WAY",

        title:
            "No Longer Strangers 💫",

        text:
            "Somewhere along the way, you stopped feeling like a stranger. I'm genuinely glad that this random connection became a friendship I value. 💙",

        visual:
            "orbit"
    },


    {
        label:
            "A FUTURE MOMENT",

        title:
            "Maybe Someday... 🌍",

        text:
            "We haven't met yet. No pictures together. No places we've visited together. Just conversations, messages, laughs, and a friendship from miles away. ✨ Maybe someday we'll finally meet... 👀",

        visual:
            "distance"
    },


    {
        label:
            "BEFORE THE LAST SURPRISE",

        title:
            "Until That Day 🎈",

        text:
            "Until the day we finally meet, I'll keep the little conversations, laughs, and moments we've shared as our own tiny collection of memories. 💙 Before you leave this universe, there's one last thing I want to tell you. 💌",

        visual:
            "birthday"
    }

];


// =========================================
// OPEN MEMORY GALLERY
// =========================================

function openMemoryGallery() {

    if (!memoryGallery) {
        return;
    }


    universeScreen.classList.remove(
        "active"
    );


    if (puzzleModal) {

        puzzleModal.classList.remove(
            "active"
        );

    }


    if (questionModal) {

        questionModal.classList.remove(
            "active"
        );

    }


    memoryGallery.classList.add(
        "active"
    );


    memoryIndex =
        0;


    createMemoryTwinkles();

    showMemory(
        memoryIndex
    );

}


// =========================================
// CREATE MEMORY TWINKLES
// =========================================

function createMemoryTwinkles() {

    const container =
        document.getElementById(
            "memoryStars"
        );


    if (!container) {
        return;
    }


    container.innerHTML =
        "";


    for (let i = 0; i < 90; i++) {

        const star =
            document.createElement(
                "div"
            );


        star.className =
            "memory-twinkle";


        const size =
            Math.random() * 3 + 1;


        star.style.width =
            `${size}px`;

        star.style.height =
            `${size}px`;


        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;


        star.style.setProperty(
            "--twinkle-duration",
            `${Math.random() * 3 + 2}s`
        );


        star.style.setProperty(
            "--drift-duration",
            `${Math.random() * 4 + 3}s`
        );


        star.style.animationDelay =
            `${Math.random() * 5}s`;


        container.appendChild(
            star
        );

    }

}


// =========================================
// SHOW MEMORY
// =========================================

function showMemory(index) {

    const memory =
        memories[index];


    if (!memory) {
        return;
    }


    const content =
        document.querySelector(
            ".memory-content"
        );


    if (content) {

        content.classList.remove(
            "memory-changing"
        );


        void content.offsetWidth;


        content.classList.add(
            "memory-changing"
        );

    }


    setTimeout(
        function () {

            const label =
                document.getElementById(
                    "memoryLabel"
                );


            const title =
                document.getElementById(
                    "memoryTitle"
                );


            const text =
                document.getElementById(
                    "memoryText"
                );


            const visual =
                document.getElementById(
                    "memoryVisual"
                );


            const nextButton =
                document.getElementById(
                    "nextMemoryBtn"
                );


            if (label) {

                label.textContent =
                    memory.label;

            }


            if (title) {

                title.textContent =
                    memory.title;

            }


            if (text) {

                text.textContent =
                    memory.text;

            }


            if (visual) {

                createMemoryVisual(
                    visual,
                    memory.visual
                );

            }


            if (nextButton) {

                if (
                    index ===
                    memories.length - 1
                ) {

                    nextButton.textContent =
                        "💌 Open The Last Surprise";

                }

                else {

                    nextButton.textContent =
                        "✨ Continue The Story";

                }

            }

        },
        350
    );

}


// =========================================
// CREATE MEMORY VISUAL
// =========================================

function createMemoryVisual(
    container,
    type
) {

    container.innerHTML =
        "";


    // TWO STRANGERS

    if (type === "stars") {

        const left =
            document.createElement(
                "div"
            );


        left.className =
            "story-star left";


        const right =
            document.createElement(
                "div"
            );


        right.className =
            "story-star right";


        container.appendChild(
            left
        );


        container.appendChild(
            right
        );

    }


    // CONVERSATIONS

    else if (type === "chat") {

        const messages = [
            "💬 Heyy",
            "😂 Hahaha",
            "✨ Really?"
        ];


        messages.forEach(
            function (
                message,
                index
            ) {

                const bubble =
                    document.createElement(
                        "div"
                    );


                const names = [
                    "one",
                    "two",
                    "three"
                ];


                bubble.className =
                    `chat-bubble chat-${names[index]}`;


                bubble.textContent =
                    message;


                container.appendChild(
                    bubble
                );

            }
        );

    }


    // RANDOM WORLD

    else if (type === "random") {

        ["😂", "💬", "✨"].forEach(
            function (emoji) {

                const element =
                    document.createElement(
                        "div"
                    );


                element.className =
                    "random-emoji";


                element.textContent =
                    emoji;


                container.appendChild(
                    element
                );

            }
        );

    }


    // GALAXY ORBIT

    else if (type === "orbit") {

        const orbit =
            document.createElement(
                "div"
            );


        orbit.className =
            "orbit";


        const center =
            document.createElement(
                "div"
            );


        center.className =
            "orbit-center";


        center.textContent =
            "🌌";


        container.appendChild(
            orbit
        );


        container.appendChild(
            center
        );

    }


    // DISTANCE

    else if (type === "distance") {

        const star1 =
            document.createElement(
                "div"
            );


        star1.className =
            "distance-star one";


        const path =
            document.createElement(
                "div"
            );


        path.className =
            "distance-path";


        const star2 =
            document.createElement(
                "div"
            );


        star2.className =
            "distance-star two";


        container.appendChild(
            star1
        );


        container.appendChild(
            path
        );


        container.appendChild(
            star2
        );

    }


    // BIRTHDAY

    else if (type === "birthday") {

        const path =
            document.createElement(
                "div"
            );


        path.className =
            "birthday-path";


        const balloon1 =
            document.createElement(
                "div"
            );


        balloon1.className =
            "birthday-balloon one";


        balloon1.textContent =
            "🎈";


        const balloon2 =
            document.createElement(
                "div"
            );


        balloon2.className =
            "birthday-balloon two";


        balloon2.textContent =
            "🎂";


        container.appendChild(
            path
        );


        container.appendChild(
            balloon1
        );


        container.appendChild(
            balloon2
        );

    }

}


// =========================================
// OPEN FINAL MESSAGE
// =========================================

function openFinalMessage() {

    if (memoryGallery) {

        memoryGallery.classList.remove(
            "active"
        );

    }


    const finalMessagePage =
        document.getElementById(
            "finalMessagePage"
        );


    if (finalMessagePage) {

        finalMessagePage.classList.add(
            "active"
        );

    }


    // Reset envelope

    if (letterEnvelope) {

        letterEnvelope.classList.remove(
            "open"
        );

    }


    // Reset button

    if (openLetterBtn) {

        openLetterBtn.innerHTML =
            "💌 Open My Letter";

        openLetterBtn.style.display =
            "block";

    }


    // Hide opened text

    if (letterOpenedText) {

        letterOpenedText.style.display =
            "none";

    }

}


// =========================================
// NEXT MEMORY
// =========================================

if (nextMemoryBtn) {

    nextMemoryBtn.addEventListener(
        "click",
        function () {

            if (
                memoryIndex <
                memories.length - 1
            ) {

                memoryIndex++;

                showMemory(
                    memoryIndex
                );

            }

            else {

                openFinalMessage();

            }

        }
    );

}


// =========================================
// FINAL MESSAGE PAGE
// =========================================


// =========================================
// ENVELOPE ELEMENTS
// =========================================

const letterEnvelope =
    document.getElementById(
        "letterEnvelope"
    );

const openLetterBtn =
    document.getElementById(
        "openLetterBtn"
    );

const letterOpenedText =
    document.getElementById(
        "letterOpenedText"
    );


// =========================================
// OPEN MY LETTER BUTTON
// =========================================

if (
    openLetterBtn &&
    letterEnvelope
) {

    openLetterBtn.addEventListener(
        "click",
        function () {

            // OPEN ENVELOPE

            letterEnvelope.classList.add(
                "open"
            );


            // Show text

            if (letterOpenedText) {

                letterOpenedText.style.display =
                    "block";

            }


            // Change button

            openLetterBtn.innerHTML =
                "💙 Letter Opened";


            // Hide button after animation

            setTimeout(
                function () {

                    openLetterBtn.style.display =
                        "none";

                },
                900
            );

        }
    );

}


// =========================================
// CLICK ENVELOPE TO OPEN
// =========================================

if (letterEnvelope) {

    letterEnvelope.addEventListener(
        "click",
        function () {

            letterEnvelope.classList.add(
                "open"
            );


            if (letterOpenedText) {

                letterOpenedText.style.display =
                    "block";

            }


            if (openLetterBtn) {

                openLetterBtn.innerHTML =
                    "💙 Letter Opened";

                openLetterBtn.style.display =
                    "none";

            }

        }
    );

}


// =========================================
// START BACKGROUND STARS
// =========================================

createBackgroundStars();


// =========================================
// SHOOTING STAR
// =========================================

function createShootingStar() {

    if (
        !universeScreen.classList.contains(
            "active"
        )
    ) {

        return;

    }


    const shootingStar =
        document.createElement(
            "span"
        );


    shootingStar.classList.add(
        "shooting-star"
    );


    shootingStar.style.left =
        (
            70 +
            Math.random() * 30
        ) + "%";


    shootingStar.style.top =
        (
            5 +
            Math.random() * 35
        ) + "%";


    universeScreen.appendChild(
        shootingStar
    );


    requestAnimationFrame(
        function () {

            shootingStar.classList.add(
                "active"
            );

        }
    );


    setTimeout(
        function () {

            shootingStar.remove();

        },
        1300
    );

}


// =========================================
// CREATE SHOOTING STARS
// =========================================

setInterval(
    function () {

        createShootingStar();

    },
    5000
);


// =========================================
// REPLAY UNIVERSE
// =========================================

const replayUniverseBtn =
    document.getElementById(
        "replayUniverseBtn"
    );


if (replayUniverseBtn) {

    replayUniverseBtn.addEventListener(
        "click",
        function () {

            // Hide final page

            const finalMessagePage =
                document.getElementById(
                    "finalMessagePage"
                );


            if (finalMessagePage) {

                finalMessagePage.classList.remove(
                    "active"
                );

            }


            // Hide memory gallery

            if (memoryGallery) {

                memoryGallery.classList.remove(
                    "active"
                );

            }


            // Hide universe

            universeScreen.classList.remove(
                "active"
            );


            // Close envelope

            if (letterEnvelope) {

                letterEnvelope.classList.remove(
                    "open"
                );

            }


            // Reset letter button

            if (openLetterBtn) {

                openLetterBtn.innerHTML =
                    "💌 Open My Letter";

                openLetterBtn.style.display =
                    "block";

            }


            // Reset opened text

            if (letterOpenedText) {

                letterOpenedText.style.display =
                    "none";

            }


            // Show intro

            introScreen.style.display =
                "flex";

            introScreen.style.opacity =
                "1";


            // Recreate universe stars

            setTimeout(
                function () {

                    createStars();

                },
                300
            );

        }
    );

}