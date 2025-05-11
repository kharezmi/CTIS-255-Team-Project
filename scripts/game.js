const SIZE = 8;
const COLORS = ["pink", "purple", "gold"];

let score = 0;
let hearts = new Array(SIZE);



class Heart {
    constructor(x, y, color, status, value) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.status = status;
        this.value = value;
    }
}

for (let i = 0; i < SIZE; i++) {
    const x = Math.floor(Math.random() * (1250 - 770 + 1)) + 770; // [770, 1250]
    const y = Math.floor(Math.random() * (620 - 310 + 1)) + 310;  // [310, 620]
    const rand = Math.floor(Math.random() * 3);
    const color = COLORS[rand];
    const value = rand === 0 ? 5 : rand === 1 ? 10 : 20; // pink=5, purple=10, gold=20

    hearts[i] = new Heart(x, y, color, false, value);
}

$(document).ready(function () {
    $("#game").on("click", start_game);
    function start_game(){
        let game_timer = window.setInterval(function () {
            let timer = parseInt($("#sec").html());
            if (timer > 0){
                timer--;
                timer > 9 ? $("#sec").html(timer) : $("#sec").html('0' + timer);
            }
            else{
                clearInterval(game_timer);
                //done screen insert later
            }
                
            
        }, 1000);

        let angle = 0;
        
        $(window).on("keydown", function(e){
            if (e.key == "ArrowLeft")
                angle -= 5;
            else if (e.key == "ArrowRight")
                angle += 5;
            angle = Math.min(90, angle);
            angle = Math.max(-90, angle);
            $("#bow").css({"transform" : "rotate(" + angle + "deg)", "transform-origin" : "50% 75%"});
            });
    }
    
    
            
});


