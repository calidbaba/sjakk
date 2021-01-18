class Square{
    constructor(xpos, ypos){
        this.occupied = false
        this.xpos = xpos
        this.ypos = ypos
    }
    draw(){
        ctx.rect(this.xpos, this.ypos, height/cells, width/cells)
        ctx.stroke()
    }
    getPosx(){
        return this.xpos 
    }
    getPosy(){
        return this.ypos
    }
    hasPiece(piece){
        this.occupied = piece
    }
}
