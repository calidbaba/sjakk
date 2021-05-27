class Pawn extends Piece{
    constructor(xpos, ypos, dead, color, sign){
        super(xpos,ypos,dead,color,sign)

    }
    move(square){
        let x = Math.floor(square.xpos/100)
        let y = Math.floor(square.ypos/100)
        let dennex = Math.floor(this.xpos/100)
        let denney = Math.floor(this.ypos/100)
        this.flytt(dennex, denney, square) 
    }
    check(){
        let dennex = Math.floor(this.xpos/100)
        let denney = Math.floor(this.ypos/100)
        if (this.color == "white"){
            if(matrix[denney-1][dennex].occupied == false){
                matrix[denney-1][dennex].showPossible()
            }
            if (denney == 6 && matrix[denney-2][dennex].occupied == false){
                matrix[denney-2][dennex].showPossible()
            }
            if(matrix[denney-1][dennex-1].occupied.color == "black"){
                matrix[denney-1][dennex-1].showPossible()
            }
            else if(matrix[denney-1][dennex+1].occupied.color == "black"){
                matrix[denney-1][dennex+1].showPossible()
            }
        }
        else{
            if(matrix[denney+1][dennex].occupied == false){
                matrix[denney+1][dennex].showPossible()
            }
            if (denney == 1 && matrix[denney+2][dennex].occupied == false){
                matrix[denney+2][dennex].showPossible()
            }
            if(matrix[denney+1][dennex+1].occupied.color == "white"){
                matrix[denney+1][dennex+1].showPossible()
            }
            else if(matrix[denney+1][dennex-1].occupied.color == "white"){
                matrix[denney+1][dennex-1].showPossible()
            }
        }
    }
}
