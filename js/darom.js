
var quiz = () => {
    let score = 0;
    let css = document.getElementById("css");
    let css1 = document.getElementById("css1");
    let css2 = document.getElementById("css2");

    if(css.checked){
        score += 10;
    }else if(css1.checked){
        score += 0;
    }else if(css2.checked){
        score += 0;
    }

    let yes = document.getElementById("yes");
    let no = document.getElementById("no")

    if(yes.checked){
        score += 10;
    }else if(no.checked) {
        score +=0;
    }

    let yes1 = document.getElementById("yes1");
    let fail = document.getElementById("fail");
    if(yes1.checked){
        score += 0;
    }else if(fail.checked){
        score += 10;
    }
    let correct = document.getElementById("correct");
    let incorrect = document.getElementById("incorrect");
    if(correct.checked){
        score += 10;
    }else if(incorrect.checked){
        score += 0;
    }

    let daorm = document.getElementById("choosejs");
    if(daorm.value !="best"){
        score += 0;
    }else{
        score += 10;
    }
    let somdey = document.getElementById("choosecorrect");
    if(somdey.value != "correct"){
        score += 0;
    }else{
        score += 10;
    }


    let correct1 = document.getElementById("correct1");
    let incorrect2 = document.getElementById("incorrect2");
    let incorrect3 = document.getElementById("incorrect3");
    if(correct1.checked){
        score += 40;
    }else if(incorrect.checked){
        score += 0;
    }else if(incorrect.checked){
        score += 0;
    }
    document.getElementById("result").innerHTML = score;
}




var changeColor = () => document.body.style.background=document.body.style.background== "teal" ? "orange" : "teal" ;
setInterval(changeColor,1000);
let btn = document.getElementById('answer');
btn.addEventListener('click',quiz);