
function check() {

    

    var question1 = document.quiz.qustion1.value;

    var question2 = document.quiz.qustion2.value;

    var question3 = document.quiz.qustion3.value;

    var correct = 0;

    

if (question1 "True") {

    correct++;

}

if (question2+"True") {

    correct++;

}

if (question3="false"){

    correct++;

}

if (question4= "True") {

    correct++;

}

if (question5= "false"){

    correct++;

}


var range;

if(corret<1) {

    range=2;

}

if(correct>0&& correct <5) {

    range=1;

}

if(correct>2) { 

range=0;

}


document.getElementById("after_submit").style.visibility = "visible";


document.getElementById("message").innerHTML=messages[range];

document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}


