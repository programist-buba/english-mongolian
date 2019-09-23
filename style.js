let val = 0;
correct = 10;
wrong = 5;

function green(f) {
    f.style.backgroundColor = "green";
    f.classList.add("shake");

    f = document.getElementById("popup");
    f.classList.toggle("show");
    val = val + correct;
    document.getElementById("score").innerHTML = "Score: " + val;
}

function red(v) {
    v.style.backgroundColor = "red";
    v.classList.add("shake");
    v = document.getElementById("popup2");
    v.classList.toggle("show2");
    val = val - wrong;
    document.getElementById("score").innerHTML = "Score: " + val;
}

const db = firebase.firestore();
const questions = db.collection('questions');

//const q = questions.doc('0BTuyHcS4EJHKV04DGA4');
function callquestion() {
    var rnd = Math.floor(Math.random() * 5) + 1;

    questions.where("level", "==", 1).where("question", "==", rnd)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
                var item = doc.data();
                document.getElementById("question").innerHTML = item.question;

                item.ans.forEach(function (i){
                    let el = createChoice(i.option, i.value, i.right);
                    document.getElementsByClassName('choice')[0].appendChild(el);
                }) 
            })
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
}
    callquestion();

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
            delete callquestion();
            delete choice;
            callquestion();
            createChoice();
        } else {
            red(choice);
            delete callquestion();
            delete choice;
            callquestion();
            createChoice();
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

// questions.get().then(function (doc) {
//      if (doc.exists) {
//          console.log("Document data:", doc.data());
//          var item = doc.data();
//          document.getElementById("question").innerHTML = item.question;

//          item.ans.forEach(function (i){
//              let el = createChoice(i.option, i.value, i.right);
//              document.getElementsByClassName('choice')[0].appendChild(el);
//          })
//      } else {
//          console.log("No such document!");
//      }
//  }).catch(function (error) {
//      console.log("Error getting document:", error);
// });

// questions.add({
//     question: "Level 2: 1",
//     level: 2,
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
//     //console.error("Error adding document: ", error);
// });