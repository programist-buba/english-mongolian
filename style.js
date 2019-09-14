
function green() {
    document.getElementById("word1").style.backgroundColor = "green";
    document.getElementById("word1").classList.add("shakeme");
}

function red() {
    document.getElementById("word2").style.backgroundColor = "red";
    document.getElementById("word1").style.backgroundColor = "green";
    document.getElementById("word2").classList.add("shake");
}