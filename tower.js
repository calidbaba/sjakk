class Tower extends Piece{
    constructor(xpos, ypos, dead, color, sign){
        super(xpos, ypos, dead, color, sign)
    }
    move(square){
        let x = Math.floor(square.xpos/100)
        let y = Math.floor(square.ypos/100)
        let dennex = Math.floor(this.xpos/100)
        let denney = Math.floor(this.ypos/100)
        //vertical
        if(dennex == x){
            let middler = true
            if (square.occupied != false){
                middler = false
                if(square.occupied.color != this.color){
                    square.occupied.die()
                    this.flytt(dennex, denney, square)
                }
            }
            else if (denney < y){
                for(let i = denney + 1; i < y; i++){
                    if(matrix[i][dennex].occupied != false){
                        middler = false
                    }
                }
            }
            else if(denney > y){
                for(let i = denney - 1; i > y; i--){
                    if(matrix[i][dennex].occupied != false){
                        middler = false
                    }
                }
            }
            if(middler){
                    this.flytt(dennex, denney, square)
            } 
        }
        //hosrisontal
        else if(denney == y){
            console.log("hosrisontal")
            let middler = true
            if (square.occupied != false){
                middler = false
                if(square.occupied.color != this.color){
                    square.occupied.die()
                    this.flytt(dennex, denney, square)
                }
             
            }
            else if (dennex < x){
                console.log("dennex < x")
                for(let i = dennex + 1; i < x; i++){
                    if(matrix[denney][i].occupied != false){
                        middler = false
                    }
                }
            }
            else if(dennex > x){
                console.log("dennex > x")
                for(let i = dennex - 1; i > x; i--){
                    if(matrix[denney][i].occupied != false){
                        console.log("false boi")
                        middler = false
                    }
                }
            }
            if(middler){
                    this.flytt(dennex, denney, square)
            } 

        }

    }
}
