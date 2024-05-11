/*
    Using Object-Oriented Appraoch. You have a Name and Score. Store the Score in board variable in the decriment order.
*/


class GameEntry{
    #playerName                 // Private Variables
    #score                      // Private Varaibles
    
    constructor(n, s){
        this.#playerName = n
        this.#score = s
    }

    getName() {
        return this.#playerName
    } 
    getScore(){
        return this.#score
    }
    playerDetails(){
        return "Name: "+ this.#playerName + " & Score: " + this.#score 
    }

}

class Scorecard extends GameEntry{
    #board = []
    #index = 0
    #capcity

    constructor(n, s, capcity){
        super(n, s)
        this.capcity = capcity
    }

    addScore(){
       this.#board.push(this.getScore()) 
    }

    display_Scorecard(){
        return this.#board
    }

}



let obj = new GameEntry("Hassan", "200")
console.log(obj.getScore())
console.log(obj.playerDetails())

let board = new Scorecard(10)
board.addScore()
console.log(board.display_Scorecard());

