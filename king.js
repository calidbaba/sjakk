class King extends Piece{
    constructor(xpos, ypos, dead, color, sign){
        super(xpos, ypos, dead, color, sign)
    }
    move(square){
        let x = Math.floor(square.xpos/100)
        let y = Math.floor(square.ypos/100)
        let dennex = Math.floor(this.xpos/100)
        let denney = Math.floor(this.ypos/100)
        if (Math.abs(dennex-x) <= 1 && Math.abs(denney-y) <=1){
            if(square.occupied == false){
                this.flytt(dennex, denney, square)
            }
            else if(square.occupied.color != this.color){
                square.occupied.die()
                this.flytt(dennex, denney, square)
            }
        }
    }
}
