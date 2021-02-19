class Queen extends Piece{
    constructor(xpos, ypos, dead, color, sign){
        super(xpos, ypos, dead, color, sign)
    }
    move(square){
        let x = Math.floor(square.xpos/100)
        let y = Math.floor(square.ypos/100)
        let dennex = Math.floor(this.xpos/100)
        let denney = Math.floor(this.ypos/100)
        //vertical
        let classname = this.constructor.name
        console.log(classname)
        if(square.occupied.color == this.color){
            return
        }
        if (classname == "Queen" || classname == "Tower" || dennex ==x || denney == y){
            this.moveStraight(square)
        }
        if(classname == "Queen" || classname == "Runner"){
            this.moveDiagonal(square)
        }

    }
    moveDiagonal(square){
        let x = Math.floor(square.xpos/100)
        let y = Math.floor(square.ypos/100)
        let dennex = Math.floor(this.xpos/100)
        let denney = Math.floor(this.ypos/100)
            
        if (Math.abs(dennex-x) == Math.abs(denney-y)){
            let taken = false
            let notTaken = true

            console.log("kjører diagonal")
            if(square.occupied.color != this.color && square.occupied != false){
                taken = true
                console.log("killkillkill")
            }
            if(dennex > x && denney > y){
                // check if path is bussy
                let i = dennex
                let k = denney
                while(i > (x+1) && k > (y+1)){
                    i--
                    k--
                    if(matrix[k][i].occupied != false){
                        notTaken = false
                        break
                    }
                }
                
            }
            else if(dennex < x && denney > y){
                let i = dennex
                let k = denney
                while(i < (x-1) && k > (y+1)){
                    i++
                    k--
                    console.log("matrixgreier", matrix[k][i], k, i)
                    if(matrix[k][i].occupied != false){
                        notTaken = false
                        break
                    }
                }
            }
            else if(dennex < (x-1) && denney < (y-1)){
                let i = dennex
                let k = denney
                while(i < x && k < y){
                    i++
                    k++
                    console.log("kjører", i, k)
                    if(matrix[k][i].occupied != false){
                        
                        notTaken = false
                        break
                    }
                }

            }
            else if(dennex > (x+1) && denney < (y-1)){
                let i = dennex
                let k = denney
                while(i > x && k < y){
                    i--
                    k++
                    if(matrix[k][i].occupied != false){
                        notTaken = false
                        break
                    }
                }

            }
            if(notTaken && taken){
                square.occupied.die()
                this.flytt(dennex, denney, square) 
            }
            else if(notTaken){
                this.flytt(dennex, denney, square) 
            }
        
        }


    }
    moveStraight(square){
        console.log("runStraight")
        let x = Math.floor(square.xpos/100)
        let y = Math.floor(square.ypos/100)
        let dennex = Math.floor(this.xpos/100)
        let denney = Math.floor(this.ypos/100)
        if(dennex == x){
            let middler = true
            let taken = false
            if (square.occupied != false && square.occupied.color != this.color){
                taken = true
            }
            if (denney < y){
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
            if(middler && taken){
                square.occupied.die()
                this.flytt(dennex, denney, square)
            }
            else if(middler){
                this.flytt(dennex, denney, square)
            } 
        }
        else if(denney == y){
        //hosrisontal
            console.log("hosrisontal")
            let middler = true
            let taken = false
            if (square.occupied != false && square.occupied.color != this.color){
                taken = true
            }
            if (dennex < x){
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
            if(middler && taken){
                square.occupied.die() 
                this.flytt(dennex, denney, square)
            } 
            else if(middler){
                this.flytt(dennex, denney, square)
            } 

        }

    }
}
