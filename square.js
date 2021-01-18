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
    getPosx(){
        return this.xpos 
    }
    getPosy(){
        return this.ypos
    }
}
