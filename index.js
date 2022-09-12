const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let x = document.getElementById("value1")
let y = document.getElementById("value2")



function generate(){
    let g1 = Math.floor(Math.random()*62)
    let g2 = Math.floor(Math.random()*62)
    let g3 = Math.floor(Math.random()*62)
    let g4 = Math.floor(Math.random()*62)
    let g5 = Math.floor(Math.random()*62)
    let g6 = Math.floor(Math.random()*62)
    let g7 = Math.floor(Math.random()*62)
    let g8 = Math.floor(Math.random()*62)
    let g9 = Math.floor(Math.random()*62)
   let g10 = Math.floor(Math.random()*62)
   let g11 = Math.floor(Math.random()*62)
   let g12 = Math.floor(Math.random()*62)
   let g13 = Math.floor(Math.random()*62)
   let g14 = Math.floor(Math.random()*62)
   let g15 = Math.floor(Math.random()*62)
   
   x.innerText =  characters[g1] + characters[g2] + characters[g3] + characters[g4] + characters[g5] + characters[g6] + characters[g7] + characters[g8] + characters[g9] + characters[g10] + characters[g11] + characters[g12]+ characters[g13]+ characters[g14]+ characters[g15]
  
   let g16 = Math.floor(Math.random()*characters.length)
   let g26 = Math.floor(Math.random()*characters.length)
   let g36 = Math.floor(Math.random()*characters.length)
   let g46 = Math.floor(Math.random()*characters.length)
   let g56 = Math.floor(Math.random()*characters.length)
   let g66 = Math.floor(Math.random()*characters.length)
   let g76 = Math.floor(Math.random()*characters.length)
   let g86 = Math.floor(Math.random()*characters.length)
   let g96 = Math.floor(Math.random()*characters.length)
   let g106 = Math.floor(Math.random()*characters.length)
   let g116 = Math.floor(Math.random()*characters.length)
   let g126 = Math.floor(Math.random()*characters.length)
   let g136 = Math.floor(Math.random()*characters.length)
   let g146 = Math.floor(Math.random()*characters.length)
   let g156 = Math.floor(Math.random()*characters.length)

   y.innerText =  characters[g16] + characters[g26] + characters[g36] + characters[g46] + characters[g56] + characters[g66] + characters[g76] + characters[g86] + characters[g96] + characters[g106] + characters[g116] + characters[g126]+ characters[g136]+ characters[g146]+ characters[g156]

}

function copyText1() {
      
    /* Copy text into clipboard */
    navigator.clipboard.writeText
        (x.innerText);
}

function copyText() {
      
    /* Copy text into clipboard */
    navigator.clipboard.writeText
        (y.innerText);
}