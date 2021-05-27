class Queen extends Piece{
    constructor(xpos, ypos, dead, color, sign){
        super(xpos, ypos, dead, color, sign)
    }
    move(square){
        let x = Math.floor(square.xpos/100)
        let y = Math.floor(square.ypos/100)
        let dennex = Math.floor(this.xpos/100)
        let denney = Math.floor(this.ypos/100)
        this.flytt(dennex, denney, square) 
    }
    check(){
        this.moveDiagonal()
        this.moveStraight()
    }
    moveDiagonal(){
        let dennex = Math.floor(this.xpos/100)
        let denney = Math.floor(this.ypos/100)
            
        let y = denney
        let x = dennex
        y--
        x--
        while(y >= 0 && x >= 0){
                if(matrix[y][x].occupied === false){
                    matrix[y][x].showPossible()
                    // notTaken = false
                }
                else if(matrix[y][x].occupied.color != this.color){
                    matrix[y][x].showPossible()
                    break 
                }
                else{
                    break
                }
                y--
                x--
        }
        //høyre diagonal
        y = denney
        x = dennex
        y--
        x++
        while(y >= 0 && x <= 7){
            if(matrix[y][x].occupied === false){
                matrix[y][x].showPossible()
                // notTaken = false
            }
            else if(matrix[y][x].occupied.color != this.color){
                matrix[y][x].showPossible()
                break 
            }
                else{
                    break
                }
            y--
            x++
        }
    }
    moveStraight(){
        let denney = Math.floor(this.ypos/100)
        let dennex = Math.floor(this.xpos/100)
        let x = dennex
        let y = denney
        y--
        while(y >= 0){
            if(matrix[y][x].occupied === false){
                matrix[y][x].showPossible()
                // notTaken = false
            }
            else if(matrix[y][x].occupied.color != this.color){
                matrix[y][x].showPossible()
                break 
            }
                else{
                    break
                }
            y--
        }
        y = denney += 1
        while(y <= 7){
            if(matrix[y][x].occupied === false){
                matrix[y][x].showPossible()
                // notTaken = false
            }
            else if(matrix[y][x].occupied.color != this.color){
                matrix[y][x].showPossible()
                break 
            }
                else{
                    break
                }
            y++
        }

    }

}
