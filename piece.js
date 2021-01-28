class Piece{
    constructor(xpos, ypos, dead, color){
        this.xpos = xpos
        this.ypos = ypos
        this.dead = dead
        this.color = color
    }
    presence(piece){
        if (this.dead == false){
            matrix[this.ypos/sizey][this.xpos/sizex].hasPiece(piece)
        }
    }
    delete(){
        ctx.clearRect(this.xpos, this.ypos, sizex, sizey)
    }
    flytt(x, y, square){
        this.delete()
        //muligens bare this = false
        console.log("se her", square.occupied, square)
        matrix[y][x].occupied = false
        this.ypos = square.ypos
        this.xpos = square.xpos
        this.presence(this)
        this.draw("P")        
    }
    die(){
        this.dead = true
        this.delete()
    }
    draw(letter){
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        if (this.color == "white"){
            ctx.fillStyle = "red"
        }
        else{
            ctx.fillStyle = "black"
        }
        ctx.fillText(letter, this.xpos + (sizex/2), this.ypos + (sizey/2))
        ctx.stroke()
        if(turn =="white"){
            turn = "black"
        }
        else{
            turn = "white"
        }
    }
}
