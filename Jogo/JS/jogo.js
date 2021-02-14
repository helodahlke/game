
const x = ` <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;
const o = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>`;
var counter = 0; 
const line = new Array(3);
line[0] = new Array(3);
line[1] = new Array(3);
line[2] = new Array(3);

$(document).ready(function(){
    
    $("table").hide();
    $("td").mouseover(function(){
       $(this).css("background-color", "#ebfeff");
    }).mouseout(function() {
        $(this).css("background-color", "rgb(217, 246, 248)");
     });
     $("td").click(function(){
            $(this).css("pointer-events", "none");
            var column = $(this).attr("coluna");
            var htmlLine = $(this).attr("linha");
            var pl1 = sessionStorage.getItem('player1');
            var pl2 = sessionStorage.getItem('player2');
            counter++;   
            
            if(counter > 0 && counter%2 != 0){ //player 1 
               
                if(pl1 == "x"){
                    line[htmlLine][column] = "x";
                    $(this).html(x);
                    
                } else {
                    line[htmlLine][column]= "o";
                    $(this).html(o);
                }
            } else { // player 2
                $(this).addClass("player_2_" + pl2);
                if(pl2 == "x"){
                    line[htmlLine][column] = "x";
                    $(this).html(x);
                } else {
                    line[htmlLine][column]= "o";
                    $(this).html(o);
                }
            }
            
            validateWinner(line);
     });
});

function gameOn(choice){

    $(".btn-color-blue").fadeOut();
    $("#choose").html("GAME ON");
    $("table").fadeIn();
    sessionStorage.setItem('player1', choice);
    sessionStorage.setItem('player2', (choice == 'x' ? 'o' : 'x'));

}

function validateWinner(table){

    
    const map = table.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    console.info(map.get(0));
    console.info([...map.keys().next().value])
    console.info("values " + [...map.values()])
    console.info("entries " + [...map.entries()])
    //console.log(table);
    /*const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var mapLines = table.map(( subarray ) => {
        return subarray;
     
    } ); 
    console.info([...mapLines.keys()])
    console.info([...mapLines.values()])
   /* var column1 = map1.reduce((total, num) => {
        return total + num;
     }, 0);
     var column2 = map1.reduce((total, num) => {
        return total + num;
     }, 0);

     


    //console.info([...red0.values(0)])
   // console.log([...red0.values()][0])
  //  console.info([...red1.values(0)])
   // console.info([...red2.values(0)])

 //   console.info([...red0.entries()])
  //  console.info([...red1.entries()])
   // console.info([...red2.entries()])

  /*  if([...red0.values()] == 3 || [...red1.values(0)] == 3 || [...red2.values(0)] == 3) {
      //  alert("Ganhou");
    }
    
    for(var x in table){
        for(var y in table){
            var arrayLinhas = table[x][y];
        //    var reduced = arrayLinhas.reduce(reducer);
       //     console.log(reduced);
           // console.log(x);
           // console.log(table[x]);
        }
        
    }
 


    /*
    const red0 = map0.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
     console.info([...red0.keys()])
    console.info([...red0.values()])
    console.info([...map.entries()])
    
    for(var i = 0; i < 3; i++){
        for(var a = 0; a < 3; a++){
            var arrayLinhas = table[i];
            var arrayColunas = table[i][a];
            //const map = arrayLinhas.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
            var reduced = arrayLinhas.reduce(reducer);
            var reduced2 = arrayColunas.reduce(reducer);
            console.log(reduced2);
            if(reduced == 3){
             //  alert("Ganhou");   
            }
          
        }
    }*/

   
  
   

          
  /* 
  
    Se numeros iguais e desenhos iguais (ganhou)

    Se linhas iguais e desenhos iguais (ganhou) -- ok

    Se colunas iguais e desenhos iguais (ganhou) 
  
  
  table[linha][coluna] 
    se linha == coluna 
    
    for(var L = 0; L < 3; L ++){
        for(var C = 0; C < 3; C ++){
            
            if(L == C && table[L] == table[C]){
                alert("Ganhastes");
            }
            
        }
    }*/


}