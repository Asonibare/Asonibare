state = true;
pieces = new Array(9);
ply = ["O","X"];
tnd = true;
var board = document.getElementById("board");
for(i = 0; i < 9; i++){
    piece = document.createElement("div");
    piece.className = "piece";
    piece.id = 'pc'+i;
    piece.style.backgroundColor = "#ffffff";
    piece.style.width = "120px";
    piece.style.height = "120px";
    piece.style.position = "absolute";
    piece.addEventListener('click',clk,i);
    //piece.innerHTML = "<p>"+(i+1)+"</p>";
    l = i%3;
    t = Math.floor(i/3)
    piece.style.top = (t*120);
    piece.style.left = (l*120);
    board.appendChild(piece);
}

function clk(param) {
    pcp =  param.srcElement;
    hand(pcp);
}
console.log(pieces[1]);
function hand(elem) {
    tex = "O";
    no = 0;
    if(state){
        tex = "X";
        no = 1;
    }
    key = Number(elem.id[2]);
    if(!tnd && pieces[key] === undefined && elem.innerHTML == ""){
        state = !state;
        pieces[key] = no;
        elem.innerHTML = "<p>"+tex+"</p>";
        end()
    }
}

function end() {
    var message = "";
    if(win()){
        message = win()+" won the game";
    }
    else if(filled()){
        message = "The game as ended in a tie";
    }
    if(message != ""){
        tnd = true;
        alert(message);
    }
}

function filled() {
    for(i = 0; i<9; i++){
        if(pieces[i] === undefined){
            return false;
        }
    }
    return true;  
}

function win() {
    if((pieces[0] != undefined && pieces[0] == pieces[1] && pieces[0] == pieces[2])){
        return "player"+ply[no];;
    }
    else if((pieces[0] != undefined && pieces[0] == pieces[3] && pieces[0] == pieces[6])){
        return "player "+ply[no];;
    }
    else if((pieces[0] != undefined && pieces[0] == pieces[4] && pieces[0] == pieces[8])){
        return "player "+ply[no];;
    }
    else if((pieces[1] != undefined && pieces[1] == pieces[4] && pieces[1] == pieces[7])){
        return "player "+ply[no];;
    }
    else if((pieces[2] != undefined && pieces[2] == pieces[5] && pieces[2] == pieces[8])){
        return "player "+ply[no];;
    }
    else if((pieces[2] != undefined && pieces[2] == pieces[4] && pieces[2] == pieces[6])){
        return "player "+ply[no];;
    }
    else if((pieces[3] != undefined && pieces[3] == pieces[4] && pieces[3] == pieces[5])){
        return "player "+ply[no];;
    }
    else if((pieces[6] != undefined && pieces[6] == pieces[7] && pieces[6] == pieces[8])){
        return "player "+ply[no];;
    }
    else{return false;}
}

function start() {
    tnd = false;
}
