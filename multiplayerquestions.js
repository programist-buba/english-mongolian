let val = 0;
let correct = 10;
let wrong = 5;


let correctStreak = 0;
let currentLvl = 1;


let j = 0;

let questionz = [1, 2, 3, 4, 5];

shuffle(questionz);

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

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

function callquestion() {
   
    let rnd = questionz[j];
    j++;
    console.log(currentLvl, rnd); 
  
    questions.where("level", "==", currentLvl).where("questionz", "==", rnd)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
                var item = doc.data();

                document.getElementById("question").innerHTML = item.question;
                document.getElementsByClassName('choice')[0].innerHTML ="";

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

    let choice = document.createElement('div');

    choice.className = 'word';
    choice.addEventListener('click', function(){
        correctStreak++;
        if (correctStreak == 5){
            currentLvl++;
            shuffle(questionz);
            j = 0;
        }
        if (correctStreak == 10){
            currentLvl++;
            shuffle(questionz);
            j = 0;
        }
        if (correctStreak == 15){
            currentLvl++;
            shuffle(questionz)
            j = 0;
        }
        if (correctStreak == 20){
            window.location.href = "file:///Users/Tushig/Desktop/english-mongolian/score.html"
        }
        if (right == true){
            green(choice);
            callquestion();
        } else {
            red(choice);
            callquestion();
        }
    });
    console.log(option, value, right);
    let letter = document.createElement('div');
    letter.className = 'letter';
    letter.innerHTML = option;
    choice.appendChild(letter);
    let question = document.createElement('span');
    question.innerHTML = value;
    // value.style.fontSize = "150%";
    choice.appendChild(question);
    return choice;
}

// questions.add({
//     question: "jfdk",
//     level: 4,
//     questionz: 5,
//     ans: [
//         {option: 'A', value: 'Teacher', right: false},
//         {option: 'B', value: 'Cashier', right: false},
//         {option: 'C', value: 'Police', right: false},
//         {option: 'D', value: 'Doctor', right: false},
//         {option: 'E', value: 'Engineer', right: true}
//     ]
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
//     .catch(function(error) {
//     console.error("Error adding document: ", error);
// });