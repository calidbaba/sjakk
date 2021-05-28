class Horse extends Piece{
    constructor(xpos, ypos, dead, color, sign){
        super(xpos,ypos,dead, color,sign)
    }
    check(){
        let dennex = Math.floor(this.xpos/100)
        let denney = Math.floor(this.ypos/100)
        let possible = [[1,2], [2,1], [-1,2],[-2,1],[1,-2], [2,-1],[-1,-2],[-2,-1]];
        for(i of possible){
            if(denney + i[0] <= 7 && denney + i[0] >=0 && dennex + i[1] <=7 && dennex +i[1] >= 0){
                if(matrix[denney + i[0]][dennex + i[1]].occupied.color != this.color || matrix[denney + i[0]][dennex + i[1]].occupied == false){
                    matrix[denney + i[0]][dennex + i[1]].showPossible()
                }
            }
        }
    }
    move(square){
        let x = Math.floor(square.xpos/100)
        let y = Math.floor(square.ypos/100)
        let dennex = Math.floor(this.xpos/100)
        let denney = Math.floor(this.ypos/100)
        this.flytt(dennex, denney, square) 
    }
}
