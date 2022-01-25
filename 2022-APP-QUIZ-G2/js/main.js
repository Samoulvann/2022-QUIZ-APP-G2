/*
 Display Question
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

    let form = document.createElement("form")
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
/*
add question function
*/
let quest = '';
let answerList=[];
function addQuestion(event){
  event.preventDefault()

  // get question from input

  quest=document.querySelector('#question').value;
  console.log(quest);
  

  // get choices from input

  let choice=document.querySelectorAll('.option input');
  answerList=[];
  for(let item of choice){
    console.log(item);
    answerList.push(item.value);
  }

  

  // get answer from input
    let option1=document.querySelector('#option-1').value;
    console.log(option1);
    let option2=document.querySelector('#option-2').value;
    console.log(option2);
    let option3=document.querySelector('#option-3').value;
    console.log(option3);
    let option4=document.querySelector('#option-4').value;
    console.log(option4);
    let answer=document.querySelector('#correction').value;
    console.log(answer);

  // declear a variable as an object
  let array=[];
  let optione=document.querySelectorAll('.option');
  for (let values of optione){
    array.push(values.value)
    console.log(values.value);
  }
  let dictionaryOfobject={};
  

  dictionaryOfobject.keyOfquestion=question;
  

  // put all of them as format in questions variable



  // push this object to questions variable


  // displayQuestion()
}
let questions  = [
  {question:quest, choices: answerList, answer:1 },
]
let listQuestion = document.querySelector(".listQuestion");
displayQuestion(questions);

let button=document.getElementById('addQuestion');
button.addEventListener('click', addQuestion);




