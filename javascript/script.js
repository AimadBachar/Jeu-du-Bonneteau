


// récupérer le btn //
let btn = document.getElementById('btn')
btn.addEventListener('click', shuffle)

let redcard = 0;

shuffle()

function shuffle() {
    let allcards = document.getElementsByClassName("card-img");
    allcards[redcard].setAttribute('src', "image/black.png");
    let random = Math.floor(Math.random() * allcards.length);  /*un nombre au hasard*/
    let card = allcards[random];
    card.setAttribute('src', "images/red.png");
    redcard = random;
}

function flip(event){
    let element = event.currentTarget;
    if (element.className === "card"){
        if(element.style.transform == "rotateY(180deg)"){
            element.style.transform = "rotateY(0deg)";
        }
        else{
            element.style.transform = "rotateY(180deg)";
        }

        }

    }
