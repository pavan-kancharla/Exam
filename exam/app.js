const qno = document.querySelector('#qno');
const submit = document.querySelector('#submit');
const a = document.getElementById('optiona');
const b = document.getElementById('optionb');
const c = document.getElementById('optionc');
const d = document.getElementById('optiond');
const res = document.querySelector('#result');
const cdisp = document.getElementById('cdisp');
const wdisp = document.getElementById('wdisp');
var wAnsdisp = document.getElementById('wAnsdisp');
const totalScore = document.getElementById('totalScore');
currqno=0;
currQdisp=1;

const ans = window.prompt("Type answers");
var wrongArr = [];
noOfCorrectans =0;
noOfWrongAns = 0;

submit.addEventListener('click', function() {
    
    currQdisp++;
    qno.innerHTML =`Question no:${currQdisp}`
    if(a.checked){
        if(ans[currqno] === a.value){
            noOfCorrectans++;
            
        }else{
            noOfWrongAns++;
            wrongArr[currqno] = 'a';
        }
    }
    if(b.checked){
        if(ans[currqno] === b.value){
            noOfCorrectans++;
            
        }else{
            noOfWrongAns++;
            wrongArr[currqno] = 'b';
        }
    }
    if(c.checked){
        if(ans[currqno] === c.value){
            noOfCorrectans++;
            
        }else{
            noOfWrongAns++;
            wrongArr[currqno] = 'c';
        }
    }
    if(d.checked){
        if(ans[currqno] === d.value){
            noOfCorrectans++;
            
        }else{
            noOfWrongAns++;
            wrongArr[currqno] = 'd';
        }
    }
    if(currQdisp > ans.length){
        alert('END OF QUESTIONS')
    }
    console.log(wrongArr[currqno])
    currqno++;
});

//const correctAnsDisp = document.createElement('h3');
res.addEventListener('click',function(){
    cdisp.textContent = `Number of correct answers:${noOfCorrectans}`;
    wdisp.textContent = `Number of wrong answers:${noOfWrongAns}`;
    const ts = (noOfCorrectans*2 -noOfWrongAns*0.66)
    ansCal();
    totalScore.textContent = `Total Score : ${ts}/${ans.length*2}`;
    
})

 var ansCal = function() {
    for(let i=0;i<ans.length;i++){
        if(wrongArr[i]){
            var w = document.createElement('li');
            wAnsdisp.appendChild(w);
            w.textContent = `Qno-${i+1}  Your ans-${wrongArr[i]}  Correct ans-${ans[i]}`
    }}
 }
// qno - your ans - crct ans 
// no of cort ans
// no of wrong ans 
// total score

