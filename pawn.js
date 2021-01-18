class Pawn extends Piece{
    constructor(xpos, ypos, dead){
        super(xpos,ypos,dead)

    }
    draw(){
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillText("P", this.xpos + (sizex/2), this.ypos + (sizey/2))
        ctx.stroke()
    }
}
