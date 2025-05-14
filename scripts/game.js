const SIZE = 8; //number of hearts
const COLORS = ["pink", "purple", "gold"]; //heart colors
const MIN_SPACING = 50; // min distance between hearts
const ARROW_SPEED = 6; 


let score = 0;
let hearts = new Array(SIZE);
let arrows = [];
let angle = 0;


class Heart {
    constructor(x, y, color, status, value) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.status = status;
        this.value = value;
    }
}

function shoot() {
    let x = 260 + 100 * Math.sin((angle*Math.PI)/180);
    let y = 425 + 30 * Math.cos((angle*Math.PI)/180);


    let arrow_img = document.createElement("img");
    arrow_img.src = "images/arrow_heart.svg";
    arrow_img.style.position = "absolute";
    arrow_img.style.width = "21px";
    arrow_img.style.height = "18px";
    arrow_img.style.left = x + "px";
    arrow_img.style.top = y + "px";
    arrow_img.className = "arrow";
    arrow_img.style.transform = `rotate(${angle}deg)`;
    

    arrows.push({ x, y, angle: angle, img: arrow_img });
    $("#game").append(arrow_img);
    console.log(`${x} ${y} ${angle}`)
}

let isGameStarted = false;

$(document).ready(function () {

    $("#game").on("click", start_game);


    function start_game() {
        if (!isGameStarted) {
            isGameStarted = true;
            $("#game").off("click")

            for (let i = 0; i < SIZE; i++) {
                let tooClose = false;
                let retries = 0;
                let x, y;
                do {
                    x = Math.floor(Math.random() * (480 - 50 + 1)) + 40; // [50, 510]
                    y = Math.floor(Math.random() * (350 - 100 + 1)) + 100;  // [100, 400]
                    for (let j = 0; j < SIZE; j++) {
                        if (j < i && hearts[j]) {
                            let distance = Math.sqrt((x - hearts[j].x) ** 2 + (y - hearts[j].y) ** 2);
                            if (i != j && distance <= MIN_SPACING)
                                tooClose = true;
                        }

                    }
                    retries++;
                } while (retries < 1000 && tooClose);

                const rand = Math.floor(Math.random() * 3);
                const color = COLORS[rand];
                const value = rand === 0 ? 5 : rand === 1 ? 10 : 20; // pink=5, purple=10, gold=20

                hearts[i] = new Heart(x, y, color, false, value);

                let img = document.createElement("img");
                img.src = "images/heart1.svg";
                img.style.position = "absolute";
                img.style.left = hearts[i].x + "px";
                img.style.top = hearts[i].y + "px";
                img.id = "heart-" + i;
                img.className = "heart";
                $("#game").append(img);
            }

            let arrow_timer = setInterval(function () {
                for (let i = 0; i < arrows.length; i++) {
                    if (arrows[i]) {
                        arrows[i].x += ARROW_SPEED * Math.sin(arrows[i].angle * Math.PI / 180);
                        arrows[i].y -= ARROW_SPEED * Math.cos(arrows[i].angle * Math.PI / 180);
                        $(arrows[i].img).css({ left: arrows[i].x + "px", top: arrows[i].y + "px" , transform: "rotate(" + arrows[i].angle + "deg)"});
                        if (arrows[i].x < 0 || arrows[i].x > 560-40 || arrows[i].y < 0 || arrows[i].y > 560) {
                            arrows[i].img.remove();
                            arrows.splice(i, 1);
                            i--;
                        }

                    }

                }
            }, 50);

            let heart_timer = window.setInterval(function () {
                for (let i = 0; i < SIZE; i++) {
                    let tooClose = false;
                    let retries = 0;
                    do {
                        hearts[i].x = Math.floor(Math.random() * (480 - 50 + 1)) + 40;
                        hearts[i].y = Math.floor(Math.random() * (350 - 100 + 1)) + 100;
                        for (let j = 0; j < SIZE; j++) {
                            if (j != i && hearts[j]) {
                                let distance = Math.sqrt((hearts[i].x - hearts[j].x) ** 2 + (hearts[i].y - hearts[j].y) ** 2);
                                if (i != j && distance <= MIN_SPACING)
                                    tooClose = true;
                            }
                        }
                        retries++;
                    } while (retries < 1000 && tooClose);

                    $("#heart-" + i).css("left", hearts[i].x + "px");
                    $("#heart-" + i).css("top", hearts[i].y + "px");

                    //change hearts' colors
                }
            }, 5000);


            let game_timer = window.setInterval(function () {
                let timer = parseInt($("#sec").html());
                if (timer > 0) {
                    timer--;
                    timer > 9 ? $("#sec").html(timer) : $("#sec").html('0' + timer);
                }
                else {
                    isGameStarted = false;
                    $("#game").on("click", start_game);
                    $(".heart").remove();
                    $(".arrow").remove();
                    arrows = []
                    $("#sec").html('30');
                    clearInterval(game_timer);
                    clearInterval(heart_timer);
                    clearInterval(arrow_timer);
                    //done screen insert later
                }


            }, 1000);

            $("#shoot button").on("click", shoot);
            $("#left").on("click", function (){
                angle-=5;
                angle = Math.min(60, angle);
                angle = Math.max(-60, angle);
                $("#bow").css({ "transform": "rotate(" + angle + "deg)", "transform-origin": "50% 75%" });
            });
            $("#right").on("click", function (){
                angle+=5;
                angle = Math.min(60, angle);
                angle = Math.max(-60, angle);
                $("#bow").css({ "transform": "rotate(" + angle + "deg)", "transform-origin": "50% 75%" });
            });
            $(window).on("keydown", function (e) {
                e.preventDefault();
                if (e.key == "ArrowLeft") angle -= 5;
                else if (e.key == "ArrowRight") angle += 5;
                else if (e.key == " ") shoot();
                angle = Math.min(60, angle);
                angle = Math.max(-60, angle);
                $("#bow").css({ "transform": "rotate(" + angle + "deg)", "transform-origin": "50% 75%" });
            });

        }
    }



});