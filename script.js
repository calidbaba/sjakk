const cells = 8
const height = 800
const width = 800
let matrix = [];

let boardEl = document.getElementById("board")

boardEl.height = height
boardEl.height = width
boardEl.style.border = "1px solid black"


let ctx = boardEl.getContext("2d")


class Square{
    constructor(occupied, xpos, ypos){
        this.occupied = occupied
        this.xpos = xpos
        this.ypos = ypos
    }
    draw(){
        ctx.rect(this.xpos, this.ypos, height/cells, width/cells)
        ctx.stroke()
    }
}

for(let i=0; i<cells; i++){
    let middler = []
    for(let k=0; k<cells; k++){
        middler.push(new Square(false,k*(width/cells), i*(height/cells)))
    }
    matrix.push(middler)
    midler = []
}
for (i of matrix){
    for(k of i){
        k.draw()
    }
}
