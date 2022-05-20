// code your solution here

function superbowlWin(array){
    let date = array.find(x => x.result === "W")
        if (date) {
            return date.year
        }
        else {
            return undefined
        }
}
