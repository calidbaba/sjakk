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

//event handler for clicks
boardEl.addEventListener("mousedown", checkClick)
boardEl.addEventListener("mouseup", checkUp)
//making board
for(let i=0; i<cells; i++){
    let middler = []
    for(let k=0; k<cells; k++){
        middler.push(new Square(k*sizex, i*sizey))
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
        middler.push(new Pawn(i.getPosx(), i.getPosy(), false, "black", "P"))
    }
    pawns.push(middler)
    middler = []
    for (i of matrix[6]){
        middler.push(new Pawn(i.getPosx(), i.getPosy(), false, "white", "P"))
    }
    
    //actually drawing them to the screen
    pawns.push(middler)
    for (i of pawns){
        for(k of i){
            k.draw()
            k.presence(k)
        }
    }
}
function makeTowers(){
    let grid = [matrix[0][0], matrix[0][7]]
    let tower
    for (i of grid){
        tower = new Tower(i.xpos, i.ypos, false, "black", "T")
        tower.draw()
        tower.presence(tower)
    }
    grid = [matrix[7][0], matrix[7][7]]
    for (i of grid){
        tower = new Tower(i.xpos, i.ypos, false, "white", "T")
        tower.draw()
        console.log(tower)
        tower.presence(tower)
    }
}
let selected
function checkClick(e){
    selected = findPiece(e.clientX, e.clientY)
    console.log(selected)
    console.log(selected.occupied)
}
function checkUp(e){
    
    let x = Math.floor(e.clientX/sizex)
    let y = Math.floor(e.clientY/sizey)
    if (selected.occupied != false && selected.occupied.color == turn){
        selected.occupied.move(matrix[y][x])
    }
}
function findPiece(x,y){
    let xpos = Math.floor(x/sizex)
    let ypos = Math.floor(y/sizey)
    if (xpos > 7){
        xpos = 7
    }
    if (ypos > 7){
        ypos = 7
    }
    return matrix[ypos][xpos]
    //if (matrix[xpos][ypos].occupied != false){
    //    console.log(matrix[xpos][ypos].occupied)

    //}

}
makePawns()
makeTowers()
