
function green() {
    document.getElementById("word1").style.backgroundColor = "green";
    document.getElementById("word1").classList.add("shakeme");
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
}

function red() {
    document.getElementById("word2").style.backgroundColor = "red";
    document.getElementById("word1").style.backgroundColor = "green";
    document.getElementById("word2").classList.add("shake");
    var popuptushig = document.getElementById("popup2");
    popuptushig.classList.toggle("show2");
}