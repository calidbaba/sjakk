class Piece{
    constructor(xpos, ypos, dead, color, sign){
        this.xpos = xpos
        this.ypos = ypos
        this.dead = dead
        this.color = color
        this.sign = sign
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
        this.draw()        
    }
    die(){
        this.dead = true
        this.delete()
    }
    draw(){
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        if (this.color == "white"){
            ctx.fillStyle = "red"
        }
        else{
            ctx.fillStyle = "black"
        }
        ctx.fillText(this.sign, this.xpos + (sizex/2), this.ypos + (sizey/2))
        ctx.stroke()
        if(turn =="white"){
            turn = "black"
        }
        else{
            turn = "white"
        }
    }
}
