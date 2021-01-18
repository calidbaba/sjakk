const cells = 8
const height = 800
const width = 800
let matrix = [];
let pawns = [];
let sizex = width/cells
let sizey = height/cells

let boardEl = document.getElementById("board")
boardEl.height = height
boardEl.width = width
boardEl.style.border = "1px solid black"

let ctx = boardEl.getContext("2d")

for(let i=0; i<cells; i++){
    let middler = []
    for(let k=0; k<cells; k++){
        middler.push(new Square(false,k*sizex, i*sizey))
    }
    matrix.push(middler)
    midler = []
}
for (i of matrix){
    for(k of i){
        k.draw()
    }
}
function makePawns(){
    //making the pawn objects
    middler = []
    for (i of matrix[1]){
        middler.push(new Pawn(i.getPosx(), i.getPosy(), false))
    }
    pawns.push(middler)
    middler = []
    for (i of matrix[6]){
        middler.push(new Pawn(i.getPosx(), i.getPosy(), false))
    }
    
    //actually drawing them to the screen
    pawns.push(middler)
    for (i of pawns){
        for(k of i){
            k.draw()
        }
    }
}
makePawns()
