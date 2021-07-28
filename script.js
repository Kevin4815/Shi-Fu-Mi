// Recovery in the DOM
let yes = document.querySelector('#yes');
let no = document.querySelector('#no');
let container = document.querySelector('.container');
let containerRestart = document.querySelector('#containerRestart');
let playerChoice = document.querySelector('#reset');
let select = document.querySelector('#select');
let decide = document.querySelector('#decide');

let choices1 = document.querySelector('#p1');
let choices2 = document.querySelector('#p2');
let statue = document.querySelector('#statue');

let stone = document.querySelector('#pierre');
let leaf = document.querySelector('#feuille');
let cissors = document.querySelector('#ciseaux');

//Variable declaration
let choice;
let random;

let point1 = 0;
let point2 = 0;

let clic = false;
let restart = false;

let computerChoice = ["Pierre", "Feuille", "Ciseaux"];

//Conditions
const buttons = document.querySelectorAll('.button');
for(const button of buttons){
    button.addEventListener('click', (event) => {
        choice = event.target.innerHTML;
        random = Math.floor(Math.random() * 3);
        console.log(choice)

        clic = true;

        stone.disabled = false;
        leaf.disabled = false;
        cissors.disabled = false;

        gameBoard();
        gameEnd();
    })
}

// When the computer is ready for play
function ready(){
    choices1.textContent = "Je suis prêt"
    choices2.textContent = "Tu es prêt(e) ?"
    stone.disabled = false;
    leaf.disabled = false;
    cissors.disabled = false;
}

// If restart = true: start again
function startAgain(){
    yes.addEventListener('click', () => {
        restart = true;
        if(restart){
            document.location.reload();
        }
    });
   // If restart = false : bye message
    no.addEventListener('click', () => {
        restart = false;
        decide.style.display = "none";
        reset.innerHTML = "Bonne journée !";
    });
    
    $("#containerRestart").fadeIn()
    player1.style.display = "none";
    player2.style.display = "none";
}

// Clear the message after few secondes
function message(){
    $('h2').html("");
}

// Show the color (red = lose) (green = win)
function color(){
    $("#player1").css("background-color", "rgba(169, 169, 169, 0.26)");
    $("#player2").css("background-color", "rgba(169, 169, 169, 0.26)");
}

//functions declaration
function gameBoard(){

    stone.disabled = true;
    leaf.disabled = true;
    cissors.disabled = true;
    let random = Math.floor(Math.random() * 3);

    $('#score1').html('Mon score : ' + point1);
    $('#score2').html('Ton score : ' + point2);

    // If the point is yours
    function yourPoint(){
        point2 ++;  
            $("#player1").css("background-color", "rgba(255, 0, 0, 0.438)")
            $("#player2").css("background-color", "rgba(0, 128, 0, 0.425)")
            choices1.textContent = computerChoice[random];
            choices2.textContent = choice;
            $('#score2').html('Ton score : ' + point2);
            $('h2').html("Un point pour toi !");
    }

    // If the point is his
    function hisPoint(){
        point1 ++;
        $("#player1").css("background-color", "rgba(0, 128, 0, 0.425)")
        $("#player2").css("background-color", "rgba(255, 0, 0, 0.438)")
        choices1.textContent = computerChoice[random];
        choices2.textContent = choice;
       
        $('#score1').html('Son score : ' + point1);
        $('h2').html("Un point pour lui !");
    }
    // If you have the same signs
    function same(){
        $('h2').html("Egalité !");
        choices1.textContent = computerChoice[random];
        choices2.textContent = choice;
        $("#player1").css("background-color", "rgba(255, 166, 0, 0.473)")
        $("#player2").css("background-color", "rgba(255, 166, 0, 0.473)")
    }
    // Condition for checking who won
    if(computerChoice[random] === choice){
        choices1.textContent = computerChoice[random];
        choices2.textContent = choice;
        console.log("egalité");
        same();
        settings()
    }
    else if(choice === "Pierre" && computerChoice[random] === "Ciseaux"
    || choice == "Ciseaux" && computerChoice[random] === "Feuille"
    || choice == "Feuille" && computerChoice[random] === "Pierre"){
        choices1.textContent = computerChoice[random];
        choices2.textContent = choice;
        console.log("Gagné");
        yourPoint();
        settings()  
    }
    else{
        choices1.textContent = computerChoice[random];
        choices2.textContent = choice;
        console.log("Perdu");
        hisPoint();
        settings()
    } 
};

// Function start when de game is over
function gameEnd(){
    if(point1 === 5){
        $('h2').css('display', 'inline');
        statue.innerHTML = "Tu as perdu..."
        $('#score2').css('color', 'red');
        $('#score1').css('color', 'green');
        score1.style.color = "green";
        select.style.display = "none";
        $('h2').css('display', 'none');
        setTimeout(startAgain, 1000);
        }

    else if(point2 === 5){
        $('h2').css('display', 'inline');
        statue.innerHTML = "Tu as gagné !"
        $('#score2').css('color', 'green');
        $('#score1').css('color', 'red');
        select.style.display = "none";
        $('h2').css('display', 'none');
        setTimeout(startAgain, 1000);
    }
}

// Function for set time out of game
function settings(){

    setTimeout(message, 1250);
    setTimeout(ready, 1250);
    setTimeout(color, 1250);
}