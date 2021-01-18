class Piece{
    constructor(xpos, ypos, dead){
        this.xpos = xpos
        this.ypos = ypos
        this.dead = dead
    }
    presence(piece){
        if (this.dead == false){
            matrix[this.xpos/sizex][this.ypos/sizey].hasPiece(piece)
        }
    }
    delete(){
        ctx.clearRect(this.xpos, this.ypos, sizex, sizey)
    }
}
