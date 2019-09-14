
function green() {
    document.getElementById("word1").style.backgroundColor = "green";
}

function red() {
    document.getElementById("word2").style.backgroundColor = "red";
    document.getElementById("word1").style.backgroundColor = "green";
    document.getElementById("word2").classList.add("shakemepls");
    document.getElementById("word2").classList.remove("shakemepls");
}

function shakeme() {
    document.getElementById("word2").classList.add("shake");
}
