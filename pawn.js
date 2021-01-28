class Pawn extends Piece{
    constructor(xpos, ypos, dead, color){
        super(xpos,ypos,dead, color)

    }
    move(square){
        let x = Math.floor(square.xpos/100)
        let y = Math.floor(square.ypos/100)
        let dennex = Math.floor(this.xpos/100)
        let denney = Math.floor(this.ypos/100)
        
        if (dennex == x){
            if (this.color == "white"){
                if (denney == 6 && square.occupied == false){
                    if(denney -y == 2 && matrix[denney-1][dennex].occupied == false){
                        this.flytt(dennex, denney, square)
                    }
                    else if(denney - y == 1){ 
                        this.flytt(dennex, denney, square)
                    }
                }
                else if (square.occupied == false && denney - y == 1 ){
                        this.flytt(dennex, denney, square)

                 
                }
            }
            //if the piece is black
            else {
                console.log("kjører")
                console.log(square)
                if (denney == 1 && square.occupied == false){
                    if(denney -y == -2 && matrix[denney+1][dennex].occupied == false){
                        this.flytt(dennex, denney, square)
                    }
                    else if(denney - y == -1){ 
                        this.flytt(dennex, denney, square)
                    }
                }
                else if (square.occupied == false && denney - y == -1 ){
                    this.flytt(dennex, denney, square)
                }
            }
        }
        //taking other pieces
        else if (Math.abs(dennex -x) == 1 && square.occupied != false){
            if (this.color == "white" && denney - y == 1 ){
                square.occupied.die()
                this.flytt(dennex, denney, square)
            }
            if (this.color == "black" && denney - y == -1 ){
                square.occupied.die()
                this.flytt(dennex, denney, square)
            }
        }
    }
}
