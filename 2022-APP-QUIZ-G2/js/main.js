/*
 Display Question For student quiz---------------------------------
 */

 function displayQuestion(questions){
  // loop to get all questions
  for (let question  of questions ){
  console.log(question);
  // create card for question
    let questionDiv=document.createElement('div');
    questionDiv.className='question';
    let par=document.createElement('p');
    par.textContent=question.question;
    questionDiv.appendChild(par);
    listQuestion.appendChild(questionDiv);
    // create form for choice
    let form = document.createElement("form");
    form.id = "choice";
    // loop to get all choices in a question
    for (let answer of question.choices){
      let input=document.createElement('input');
      let labels=document.createElement('label');
      labels.textContent = answer;

      input.type='radio';
      input.name='answer';
      form.appendChild(input);
      form.appendChild(labels);
    }
    questionDiv.appendChild(form);
  }
}
// displayQuestion for student
let questions  = [
  {question:'1. I ...(hear) a new song on the radio.', choices:  [" hade","heard","hote","harding"],answer:1 },
  {question:'2.I ...(read)three books last week.', choices:  ["rade","reading","read","readed"],answer:2 },
  {question:'3.They ...(speak) French to the waitress.', choices:  ["speak","spoke","speaking","spoked"],answer:1 },
]
let listQuestion = document.querySelector(".listQuestion");
displayQuestion(questions);


/*
Add question function
*/
function addQuestion(event){
  event.preventDefault()
  // get question from input
  let quest=document.querySelector('#question').value;
  // get choices from input
  let option1=document.querySelector('#option-1').value;
  let option2=document.querySelector('#option-2').value;
  let option3=document.querySelector('#option-3').value;
  let option4=document.querySelector('#option-4').value;
  let answer=document.querySelector('#correction').value;
  // get answer from input
  
  // declear a variable as an object
  let opjectData={question: quest,myAnsers : [option1, option2,option3,option4], ofAnser : option4, corection: answer};
  answerList.push(opjectData);
  console.log(answerList);
  displayQuestionTeacher();
  
};

/*
 Display Question For Teacer edit-------------------------------
 */

function displayQuestionTeacher(){

  let toSection=document.createElement('section');
  toSection.className = "section2";
  let containQuestion = document.createElement('div');
  containQuestion.setAttribute('id','containQuestion');



  for(let val of answerList){
    let form = document.createElement('form');
    form.className='formOflist';
    let p = document.createElement('p');
    p.className='showQuestion';
    p.textContent=val.question;

    form.appendChild(p);
    //to create parents input//
    let div = document.createElement('div');
    div.className='showAnser';

    let ol1 = document.createElement('ol');
    let li1  = document.createElement('li');
    li1.textContent=val.myAnsers[0];
    //output choice1
    let choices1 = document.createElement('input');
    choices1.type='radio';
    choices1.name='name';
    choices1.id='name1';
    ol1.appendChild(choices1);
    ol1.appendChild(li1);
    div.appendChild(ol1)
    let br1 = document.createElement('br');
    div.appendChild(br1);

    //output choice2
    let ol2 = document.createElement('ol');
    let li2  = document.createElement('li');
    li2.textContent=val.myAnsers[1];

    let choices2 = document.createElement('input');
    choices2.type='radio';
    choices2.name='name';
    choices2.id='name2';
    ol2.appendChild(choices2);
    ol2.appendChild(li2);
    div.appendChild(ol2)
    let br2 = document.createElement('br');
    div.appendChild(br2);
    //output choice3
    let ol3 = document.createElement('ol');
    let li3  = document.createElement('li');
    li3.textContent=val.myAnsers[2];

    let choices3 = document.createElement('input');
    choices3.type='radio';
    choices3.name='name';
    choices3 .id='name3';
    ol3.appendChild(choices3);
    ol3.appendChild(li3);
    div.appendChild(ol3)
    let br3 = document.createElement('br');
    div.appendChild(br3);
    //output choice4
    let ol4 = document.createElement('ol');
    let li  = document.createElement('li');
    li.textContent=val.myAnsers[3];

    let choices4 = document.createElement('input');
    choices4.type='radio';
    choices4.name='name';
    choices4.id='name4';
    ol4.appendChild(choices4);
    ol4.appendChild(li);
    div.appendChild(ol4)
    let br4 = document.createElement('br');
    div.appendChild(br4);
    form.appendChild(div);

    containQuestion.appendChild(form);
     
    toSection.appendChild(containQuestion);
    document.body.appendChild(toSection);
  }
    //To remove
  let Questiondelet = document.querySelectorAll("#containQuestion");
    if (Questiondelet.length>1){
        Questiondelet[0].remove();
    }
}

// gobal variable //
let answerList= [];
let button=document.getElementById('addQuestion');
button.addEventListener('click', addQuestion);




