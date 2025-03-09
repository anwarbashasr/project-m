const gameboard = document.getElementById("gameboard");
const restart = document.getElementById("restart");

let cardarr = [
  {
    name: "one",
    img:  '<img src="asset/one.avif" alt="one"></img>'
  },
  {
    name: "two",
    img: '<img src="/asset/two.avif" alt="two"></img>'
  },
  {
    name: "three",
    img: '<img src="/asset/three.avif" alt="three"></img>'
  },
  {
    name: "four",
    img: '<img src="/asset/four.avif" alt="four"></img>'
  },
  {
    name: "five",
    img: '<img src="/asset/five.avif" alt="five"></img>'
  },
  {
    name: "six",
    img: '<img src="/asset/six.avif" alt="six"></img>'
  },
  {
    name: "one",
    img:  '<img src="asset/one.avif" alt="one"></img>'
  },
  {
    name: "two",
    img: '<img src="/asset/two.avif" alt="two"></img>'
  },
  {
    name: "three",
    img: '<img src="/asset/three.avif" alt="three"></img>'
  },
  {
    name: "four",
    img: '<img src="/asset/four.avif" alt="four"></img>'
  },
  {
    name: "five",
    img: '<img src="/asset/five.avif" alt="five"></img>'
  },
  {
    name: "six",
    img: '<img src="/asset/six.avif" alt="six"></img>'
  },
];

let flippedcard = [];
let matchcard = 0;




function shuffle(){
    for ( i=cardarr.length-1;i>=0;i--){
        const rand = Math.floor(Math.random()*(i+1));
        [cardarr[i],cardarr[rand]]=[cardarr[rand],cardarr[i]];
        
    }
}

carddiv()
function carddiv(){
    
    cardarr.forEach((curr,index) => {
        const card = document.createElement("div");
        card.setAttribute("id",index)
        card.classList.add("images");
        card.classList.add("active");
        
        gameboard.append(card);
        card.addEventListener("click",flipcard);
        
    });

}

function flipcard(){
    if(flippedcard.length<2){
        const cardvalue = this.getAttribute("id");
        flippedcard.push(this);
        this.classList.remove("images");
        this.innerHTML = cardarr[cardvalue].img;
        if(flippedcard.length==2){
            setTimeout(check,700);
        }
    }
    
}
function check(){
        const card1 = flippedcard[0].getAttribute("id");
        const card2 = flippedcard[1].getAttribute("id");
        if(cardarr[card1].name === cardarr[card2].name){
            flippedcard[0].removeEventListener("click",flipcard);
            flippedcard[1].removeEventListener("click",flipcard);
            matchcard++;
            checkcards();
        }else{
            flippedcard[0].innerHTML = "";
            flippedcard[0].classList.add("images");
            flippedcard[1].innerHTML = "";
            flippedcard[1].classList.add("images");

        }
         flippedcard = [];

}

function checkcards(){
        if(matchcard == cardarr.length/2){
            gameboard.innerHTML = "You Won";
            gameboard.classList.remove("gameboard");
            gameboard.classList.add("won");
        }
}

function restartgame(){
   flippedcard = [];
  matchcard = 0;
  gameboard.innerHTML = '';
  gameboard.classList.add("gameboard");
  gameboard.classList.remove("won");
  shuffle();
  carddiv();
    
};
shuffle()
    restart.addEventListener("click",restartgame)