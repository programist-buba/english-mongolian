let val = 0;
correct = 10;
wrong = 5;

function green(v) {
    v.style.backgroundColor = "green";
    v.classList.add("shake");
    document.getElementById("word1").classList.add("shakeme");
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
    val = val + correct;
    document.getElementById("score").innerHTML = "Score: " + val;
}

function red(v) {
    v.style.backgroundColor = "red";
    v.classList.add("shake");
    var popuptushig = document.getElementById("popup2");
    popuptushig.classList.toggle("show2");
    val = val - wrong;
    document.getElementById("score").innerHTML = "Score: " + val;
}



const db = firebase.firestore();
const questions = db.collection('questions');

const q = questions.doc('oobcYsZKI1RAdqj7ISjx');


function createChoice(option, value, right) {
    // <div class="word" onclick="green()">
    //     <div id="letter">A</div>
    //     <span id="span">WORD1</span>
    // </div>
    let choice = document.createElement('div');
    choice.className = 'word';
    choice.addEventListener('click', function(){
        if (right == true){
            green(choice);
        } else {
            red(choice);
        }
    });
    let letter = document.createElement('div');
    letter.className = 'letter';
    letter.innerHTML = option;
    choice.appendChild(letter);
    let answer = document.createElement('span');
    answer.innerHTML = value;
    choice.appendChild(answer);
    return choice;
}

q.get().then(function (doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        var item = doc.data();
        document.getElementById("question").innerHTML = item.question;

        item.ans.forEach(function (i){
            let el = createChoice(i.option, i.value, i.right);
            document.getElementsByClassName('choice')[0].appendChild(el);
        })
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function (error) {
    console.log("Error getting document:", error);
});



// questions.add({
//     question: "QUESTION IS WHATEVER ?? SASS ?",
//     level: 1,
//     ans: [
//         {option: 'A', value: 'TEST1', right: true},
//         {option: 'B', value: 'TEST2', right: false},
//         {option: 'C', value: 'TEST3', right: false},
//         {option: 'D', value: 'TEST4', right: false},
//         {option: 'E', value: 'TEST5', right: false}
//     ]
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });