document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOMContentLoaded!");

    if (!localStorage.getItem("LetterA")) {
        localStorage.setItem("LetterA", "a")
    };

    if (!localStorage.getItem("LetterE")) {
        localStorage.setItem("LetterE", "e")
    };

    if (!localStorage.getItem("LetterI")) {
        localStorage.setItem("LetterI", "i")
    };

    if (!localStorage.getItem("LetterO")) {
        localStorage.setItem("LetterO", "o")
    };

    if (!localStorage.getItem("LetterU")) {
        localStorage.setItem("LetterU", "u")
    };
});

var btn = document.querySelectorAll('.choice');
// Loop through the NodeList
btn.forEach(function (btn) {
    // Add the event listener to each button
    btn.addEventListener('click', function () {
        // ε
        if (btn.id == "1") {
            localStorage.setItem("LetterA", "α");
        } else if (btn.id == "2") {
            localStorage.setItem("LetterA", "ɑ");
        } else if (btn.id == "3") {
            alert('hi');
        } else if (btn.id == "4") {
            alert('hi');
        } else if (btn.id == "5") {
            alert('hi');
        } else if (btn.id == "6") {
            alert('hi');
        } else if (btn.id == "7") {
            localStorage.setItem("LetterE", "ε");
        } else if (btn.id == "8") {
            localStorage.setItem("LetterE", "ɛ");
        } else if (btn.id == "9") {
            alert('hi');
        } else if (btn.id == "10") {
            alert('hi');
        } else if (btn.id == "11") {
            alert('hi');
        } else if (btn.id == "12") {
            alert('hi');
        } else if (btn.id == "13") {
            localStorage.setItem("LetterI", "ί");
        } else if (btn.id == "14") {
            localStorage.setItem("LetterI", "ɨ");
        } else if (btn.id == "15") {
            alert('hi');
        } else if (btn.id == "16") {
            alert('hi');
        } else if (btn.id == "17") {
            alert('hi');
        } else if (btn.id == "18") {
            alert('hi');
        } else if (btn.id == "19") {
            localStorage.setItem("LetterO", "ό");
        } else if (btn.id == "20") {
            localStorage.setItem("LetterO", "ɵ");
        } else if (btn.id == "21") {
            alert('hi');
        } else if (btn.id == "22") {
            alert('hi');
        } else if (btn.id == "23") {
            alert('hi');
        } else if (btn.id == "24") {
            alert('hi');
        } else if (btn.id == "25") {
            localStorage.setItem("LetterU", "Ц");
        } else if (btn.id == "26") {
            localStorage.setItem("LetterU", "Ʋ");
        } else if (btn.id == "27") {
            alert('hi');
        } else if (btn.id == "28") {
            alert('hi');
        } else if (btn.id == "29") {
            alert('hi');
        } else if (btn.id == "30") {
            alert('hi');
        }

        outcome();
    });
});

var input = document.getElementById("inp");
var output = document.getElementById("out");

input.addEventListener("input", function () {
    outcome();
});

function outcome() {
    var LA = localStorage.getItem("LetterA");
    var LE = localStorage.getItem("LetterE");
    var LI = localStorage.getItem("LetterI");
    var LO = localStorage.getItem("LetterO");
    var LU = localStorage.getItem("LetterU");

    var Filtered = input.value.replace(/a/gi, LA).replace(/e/gi, LE).replace(/i/gi, LI).replace(/o/gi, LO).replace(/u/gi, LU);
    output.value = Filtered;
};