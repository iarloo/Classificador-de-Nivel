let jogador = ["Nome escolhido", 6790, "Prata"]

//Declarando nome do Heroi
jogador[0] = "Felipe"

if(jogador[1] < 1000){
    
    jogador[2] = "Ferro"

}else if(jogador[1] >= 1001 && jogador[1] <= 2000){

    jogador[2] = "Bronze"

}else if(jogador[1] >= 2001 && jogador[1] <= 6000){

    jogador[2] = "Prata"

}else if(jogador[1] >= 6001 && jogador[1] <= 7000){

    jogador[2] = "Ouro"

}else if(jogador[1] >= 7001 && jogador[1] <= 8000){

    jogador[2] = "Platina"

}else if(jogador[1] >= 8001 && jogador[1] <= 9000){

    jogador[2] = "Ascendente"

}else if(jogador[1] >= 9001 && jogador[1] <= 10000){

    jogador[2] = "Imortal"

}else if(jogador[1] >= 10001){

    jogador[2] = "Radiante"

}else {
        console.log("XP incorreto")
        return

}

console.log("O Héroi de nome: " + jogador[0] + ", está no nível " + jogador[2])
