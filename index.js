function whoIsWinner(pl1, pl2) {
    if (pl1 === pl2){
        console.log('ничья!')
    }
    if (pl1 === "ножницы" && pl2 === "бумага"){
        console.log('победитель pl1!')
    } else if (pl1 === "бумага" && pl2 === "ножницы"){
        console.log ('победитель pl2!')
    }
    if(pl1 === "ножницы" && pl2 === "камень"){
        console.log("победитель pl2!")
    }else if (pl1 === "камень" && pl2 === "ножницы"){
        console.log("победитель pl1!")
    }

    if(pl1 === "бумага" && pl2 === "камень"){
        console.log("победитель pl1!")
    }else if (pl1 === "камень" && pl2 === "бумага"){
        console.log("победитель pl2!")
    }
}

const index = Math.floor(Math.random() * 3)
let choise = ['камень', 'ножницы', 'бумага']
let compChoise = choise[index]

whoIsWinner('бумага', compChoise)