let turn = "white"
let color = "white"
let firstcolor = color
class Square{
    constructor(xpos, ypos){
        this.occupied = false,
        this.xpos = xpos
        this.ypos = ypos
        this.possible = false
    }
    draw(){
        if(this.xpos == 0){
            console.log(this.xpos, this.ypos, color)            
            if(firstcolor == "white"){
                color = "brown"
                firstcolor = "brown"
            }
            else{
                color = "white"
                firstcolor = "white"
            }
        }
        else if (color == "white"){
            color = "brown"
        }
        else{
            color = "white"
        }
        ctx.fillStyle = color
        this.color = color
        ctx.fillRect(this.xpos, this.ypos, height/cells, width/cells)
        ctx.stroke()
    }
    reDraw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.xpos, this.ypos, height/cells, width/cells)
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
    showPossible(){
        ctx.beginPath();
        ctx.fillStyle = "green"
        ctx.arc(this.xpos+sizex/2,this.ypos+sizey/2, 10, 0, 2 * Math.PI);
        ctx.fill()
        console.log(this)
        possible_tiles.push(this)
    }




}
