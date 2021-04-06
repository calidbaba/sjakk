class Piece{
    constructor(xpos, ypos, dead, color, sign){
        this.xpos = xpos
        this.ypos = ypos
        this.dead = dead
        this.color = color
        this.sign = sign
        this.bilde
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
        matrix[y][x].reDraw()
        this.ypos = square.ypos
        this.xpos = square.xpos
        this.presence(this)
        this.draw(square)        
    }
    die(){
        this.dead = true
        this.delete()
    }
    draw(){
        //ctx.fillText(this.sign, this.xpos + (sizex/2), this.ypos + (sizey/2))
        let bilde = new Image(sizex, sizey)
        bilde.src = `bilder/${this.sign}.${this.color}`
        bilde.onload = () => {
            ctx.drawImage(bilde, this.xpos, this.ypos , sizex, sizey)
        }
        this.bilde = bilde

        if(turn =="white"){
            turn = "black"
        }
        else{
            turn = "white"
        }
    }
}
