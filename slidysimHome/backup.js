// counts the moves during the solve

let mvc = 0;
function movecounter(){
    mvc++
    $("#mvc").html(mvc);
}


// variables for the solve

let solveDelay = 3000;
let tps = 0;
let solveTime = 0;






        










window.onload = function solveWR() {

  


setTimeout(() => {
    
    var start = Date.now();
    setInterval(function() {
        var delta = Date.now() - start; // milliseconds elapsed since start
        
    
        if(mvc < 23){
            delta = delta/1000
            tps = (mvc/delta).toFixed(3)
            $("#tps").html(tps)
            $("#time").html(delta)
            console.log(tps)

        }
        if (mvc == 23){

            delta = 0.953
            tps = (mvc/delta).toFixed(3)
            
            $("#tps").html(tps)
            $("#time").html(delta)
        }    
    }, 1); // update every "ms"
    

}, solveDelay);    








   
   
// when the page loads, there is a delay before the solve starts
// that solves the puzzle with adding also the time between the moves
    setTimeout(() => {
        
        setTimeout(() => { // move 1
            $(".tiles-container > div:nth-child(3)").css("grid-area", "seven")  
            movecounter()
            solveTime = 18
        }, 18);
        
    
        setTimeout(() => { // move 2
            $(".tiles-container > div:nth-child(8)").css("grid-area", "eight")
            movecounter()
            solveTime = 49
        }, 49);
    
    
        setTimeout(() => { // move 3
            $(".tiles-container > div:nth-child(4)").css("grid-area", "four")
            movecounter()
            solveTime = 108
        }, 108);

        setTimeout(() => { // move 4
            $(".tiles-container > div:nth-child(3)").css("grid-area", "three")
            movecounter()
            solveTime = 140
        }, 140);

        setTimeout(() => { // move 5
            $(".tiles-container > div:nth-child(7)").css("grid-area", "seven")
            movecounter()
            solveTime = 260
        }, 260);

        setTimeout(() => { // move 6
            $(".tiles-container > div:nth-child(11)").css("grid-area", "six")
            movecounter()
            solveTime = 322
        }, 322);

        setTimeout(() => { // move 7
            $(".tiles-container > div:nth-child(6)").css("grid-area", "five")
            movecounter()
            solveTime = 352
        }, 352);

        setTimeout(() => { // move 8
            $(".tiles-container > div:nth-child(5)").css("grid-area", "nine")
            movecounter()
            solveTime = 383
        }, 383);

        setTimeout(() => { // move 9
            $(".tiles-container > div:nth-child(9)").css("grid-area", "thirteen")
            movecounter()
            solveTime = 412
        }, 412);

        setTimeout(() => { // move 10
            $(".tiles-container > div:nth-child(13)").css("grid-area", "fourteen")
            movecounter()
            solveTime = 475
        }, 475);

        setTimeout(() => { // move 11
            $(".tiles-container > div:nth-child(10)").css("grid-area", "fifteen")
            movecounter()
            solveTime = 534
        }, 534);

        setTimeout(() => { // move 12
            $(".tiles-container > div:nth-child(14)").css("grid-area", "eleven")
            movecounter()
            solveTime = 564
        }, 564);

        setTimeout(() => { // move 13
            $(".tiles-container > div:nth-child(11)").css("grid-area", "ten")
            movecounter()
            solveTime = 597
        }, 597);

        setTimeout(() => { // move 14
            $(".tiles-container > div:nth-child(6)").css("grid-area", "six")
            movecounter()
            solveTime = 626
        }, 626);

        setTimeout(() => { // move 15
            $(".tiles-container > div:nth-child(5)").css("grid-area", "five")
            movecounter()
        }, 656);

        setTimeout(() => { // move 16
            $(".tiles-container > div:nth-child(9)").css("grid-area", "nine")
            movecounter()
            solveTime = 719
        }, 719);

        setTimeout(() => { // move 17
            $(".tiles-container > div:nth-child(13)").css("grid-area", "thirteen")
            movecounter()
            solveTime = 748
        }, 748);

        setTimeout(() => { // move 18
            $(".tiles-container > div:nth-child(10)").css("grid-area", "fourteen")
            movecounter()
            solveTime = 779
        }, 779);

        setTimeout(() => { // move 19
            $(".tiles-container > div:nth-child(14)").css("grid-area", "fifteen")
            movecounter()
            solveTime = 808
        }, 808);

        setTimeout(() => { // move 20
            $(".tiles-container > div:nth-child(11)").css("grid-area", "eleven")
            movecounter()
            solveTime = 841
        }, 841);

        setTimeout(() => { // move 21
            $(".tiles-container > div:nth-child(10)").css("grid-area", "ten")
            movecounter()
            solveTime = 900
        }, 900);

        setTimeout(() => { // move 22
            $(".tiles-container > div:nth-child(14)").css("grid-area", "fourteen")
            movecounter()
            solveTime = 930
        }, 930);

        setTimeout(() => { // move 23
            $(".tiles-container > div:nth-child(15)").css("grid-area", "fifteen")
            movecounter()
            solveTime = 953
        }, 953);

    }, solveDelay);



    /*******************************************************************************************/
    /****************************************[ CSS ]********************************************/
    /*******************************************************************************************/
   
    


} // leaves the onload














