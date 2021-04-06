const cells = 8
const height = 800
const width = 800
let matrix = [];
let pawns = [];
let sizex = width/cells
let sizey = height/cells
let possible_tiles = [];
let current_piece
let animate_id
let isMouseDown = false
let pos = [0,0]

let boardEl = document.getElementById("board")
boardEl.height = height
boardEl.width = width
boardEl.style.border = "1px solid black"

let ctx = boardEl.getContext("2d")

//event handler for clicks
boardEl.addEventListener("mousedown", checkClick)
boardEl.addEventListener("mouseup", checkUp)

boardEl.addEventListener("mousedown", () => {
   isMouseDown = true
    addEventListener("mousemove", musen_beveger)

})
function musen_beveger(e){
    pos[0] = e.clientX
    pos[1] = e.clientY
    requestAnimationFrame(move_piece)
}
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
        middler.push(new Pawn(i.getPosx(), i.getPosy(), false, "black", "pawn"))
    }
    pawns.push(middler)
    middler = []
    for (i of matrix[6]){
        middler.push(new Pawn(i.getPosx(), i.getPosy(), false, "white", "pawn"))
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
        tower = new Tower(i.xpos, i.ypos, false, "black", "rook")
        tower.draw()
        tower.presence(tower)
    }
    grid = [matrix[7][0], matrix[7][7]]
    for (i of grid){
        tower = new Tower(i.xpos, i.ypos, false, "white", "rook")
        tower.draw()
        tower.presence(tower)
    }
}
function makeHorses(){
    let grid = [matrix[0][1], matrix[0][6]]
    let horse
    for (i of grid){
        horse = new Horse(i.xpos, i.ypos, false, "black", "knight")
        horse.draw()
        horse.presence(horse)
    }
    grid = [matrix[7][1], matrix[7][6]]
    for (i of grid){
        horse = new Horse(i.xpos, i.ypos, false, "white", "knight")
        horse.draw()
        horse.presence(horse)
    }
}
function makeRunners(){
    let grid = [matrix[0][2], matrix[0][5]]
    let runnner
    for (i of grid){
        runner = new Runner(i.xpos, i.ypos, false, "black", "bishop")
        runner.draw()
        runner.presence(runner)
    }
    grid = [matrix[7][2], matrix[7][5]]
    for (i of grid){
        runner = new Runner(i.xpos, i.ypos, false, "white", "bishop")
        runner.draw()
        runner.presence(runner)
    }
}
function makeQueen(){
    let grid = matrix[0][3]
    queen = new Queen(grid.xpos, grid.ypos, false, "black", "queen")
    queen.draw()
    queen.presence(queen)

    grid = matrix[7][3]
    queen = new Queen(grid.xpos, grid.ypos, false, "white", "queen")
    queen.draw()
    queen.presence(queen)
}
function makeKing(){
    let grid = matrix[0][4]
    king = new King(grid.xpos, grid.ypos, false, "black", "king")
    king.draw()
    king.presence(king)

    grid = matrix[7][4]
    king = new King(grid.xpos, grid.ypos, false, "white", "king")
    king.draw()
    king.presence(king)
}

function removePossible(){
    for (i of possible_tiles){
        i.reDraw()
    }
    possible_tiles =  []
}

function move_piece(e){
    if (typeof selected !== 'undefined'){
        selected.occupied.bilde.style.position = "absolute"
        selected.occupied.bilde.style.left = `${pos[0]}px`
        selected.occupied.bilde.style.top = `${pos[1]}px`
        document.body.appendChild(selected.occupied.bilde)
    }
}
let selected
function checkClick(e){
    let x = Math.floor(e.clientX/sizex)
    let y = Math.floor(e.clientY/sizey)
    /*if (matrix[y][x].occupied != false && matrix[y][x].occupied.color == turn){
        animate_id = requestAnimationFrame(move_piece)
    }*/
    if(possible_tiles.includes(matrix[y][x])){
        selected.occupied.move(matrix[y][x])
        removePossible()
        console.log("kjøreer")
        return

    }
    removePossible()
    selected = findPiece(e.clientX, e.clientY)
    console.log("les selected", selected)

    //console.log(selected)
    //console.log(selected.occupied)
    if (selected.occupied != false && selected.occupied.color == turn){
        selected.occupied.check()
    }
}
function checkUp(e){
    removeEventListener("mousemove", musen_beveger)
    let x = Math.floor(e.clientX/sizex)
    let y = Math.floor(e.clientY/sizey)
    if(possible_tiles.includes(matrix[y][x])){
        selected.occupied.move(matrix[y][x])
        removePossible()
        console.log("kjøreer")
        return

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

}
makePawns()
makeTowers()
makeHorses()
makeRunners()
makeQueen()
makeKing()
