
document.addEventListener("DOMContentLoaded", function () {
    let card = document.getElementsByClassName("cards");
    var images = new Array("1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg");
    var anotherArr = [0, 0, 0, 0, 0];
    function randNumber() {
        var num = Math.floor(Math.random() * 5);
        if (anotherArr[num] < 2) {
            anotherArr[num]++;
            return images[num];
        }
        else { return randNumber(); }
    }
    for (var i = 0; i < card.length; i++) {
        card[i].src = randNumber();
    }

    start.addEventListener('click', function startGame() {
        card = document.getElementsByClassName("cards");
        let cardBack = document.createElement("div");
        for (var i = 0; i < card.length; i++) {
            // card[i].src = "6.jpg";
            // card[i].style.filter = "grayscale(100%)";
            card[i].style.filter = "brightness(0.00001)";
            card[i].addEventListener("click", function (e) {
                e.target.style.filter = "brightness(1)";
            });
        }
    })
});

// for (var i = 0; i < card.length; i++) {

            // }

    // cards.forEach(function (card) {
    //     image.addEventListener('click', imageClickFunc);
    // });



// $("#main").on('click', '.cards', function (e) {
//     e.target.src = 
// })