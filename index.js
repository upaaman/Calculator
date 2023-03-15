for (var i = 0; i < 20; i++) {
    document.querySelectorAll(".Button")[i].addEventListener("click", function (ev) {
        //   console.log(ev.target.innerHTML)
        process(ev.target.innerHTML);
        makeSound(ev.target.innerHTML);
    });

}


document.addEventListener("keypress", function (e) {
    process(e.key);
    makeSound(e.key);
})


function process(event) {
    if (event == "❤️") {
        setTimeout(function () {
            $(".display-num").text("CALC");
        }, 100)
        setTimeout(function () {
            $(".display-num").text("");
        }, 700)
    }

    else if (event == "a" || event == "A") {
        $(".display-num").text("");
        $(".display-NUM").text("");
    }
    else if (event == "⇦" || event == "<") {
        var ind = document.querySelector(".display-num").innerHTML.length;
        var ll = document.querySelector(".display-num").innerHTML.slice(0, ind - 1);
        $(".display-num").text(ll);
    }
    else {
        var prevNum = document.querySelector(".display-num").innerHTML;
        $(".display-num").text(prevNum + event);
    }

    if (
        event == "+" ||
        event == "-" ||
        event == "/" ||
        event == "*" ||
        event == "=" ||
        event == "%"
    ) {
        var Pnum = document.querySelector(".display-NUM").innerHTML;
        var num = document.querySelector(".display-num").innerHTML;
        $(".display-NUM").text(Pnum + num);
        $(".display-num").text("");

        if (event == "=") {
            var res = document.querySelector(".display-NUM").innerHTML;
            var indx = res.indexOf("=");
            res = res.slice(0, indx);
            var result = eval(res);
            $(".display-num").text(result);
            $(".display-NUM").text("");
        }
    }
}



function makeSound(buttonPressed) {
    if (buttonPressed == "+" || buttonPressed == "-" || buttonPressed == "/" || buttonPressed == "%" || buttonPressed == "*") {
        let sound = new Audio("sounds/Sound2.mp3");
        sound.play();
    }
    else if (buttonPressed == "=" || buttonPressed == "A") {
        let sound = new Audio("sounds/Sound3.mp3");
        sound.play();
    }
    else {
        let sound = new Audio("sounds/Sound.wav");
        sound.play();
    }
}
