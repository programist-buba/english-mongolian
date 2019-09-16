let val = 0;
correct = 10; 
wrong = 5;

function green() {
    document.getElementById("word1").style.backgroundColor = "green";
    document.getElementById("word1").classList.add("shakeme");
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
    val = val + correct;
    document.getElementById("score").innerHTML = "Score: " + val;
    
}

function red() {
    document.getElementById("word2").style.backgroundColor = "red";
    document.getElementById("word1").style.backgroundColor = "green";
    document.getElementById("word2").classList.add("shake");
    var popuptushig = document.getElementById("popup2");
    popuptushig.classList.toggle("show2");
    val = val - wrong;
    document.getElementById("score").innerHTML = "Score: " + val;
}