

/*
add question function
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
    displayQuestion();
    
  };
  /*
   Display Question
   */
  function displayQuestion(){
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
  
      let choices1 = document.createElement('input');
      choices1.type='radio';
      choices1.name='name';
      choices1.id='name1';
      ol1.appendChild(choices1);
      ol1.appendChild(li1);
      div.appendChild(ol1)
  
      let br1 = document.createElement('br');
      div.appendChild(br1);
  
      
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
  
      
      let ol3 = document.createElement('ol');
      let li3  = document.createElement('li');
      li3.textContent=val.myAnsers[0];
  
      let choices3 = document.createElement('input');
      choices3.type='radio';
      choices3.name='name';
      choices3 .id='name3';
      ol3.appendChild(choices3);
      ol3.appendChild(li3);
      div.appendChild(ol3)
  
      let br3 = document.createElement('br');
      div.appendChild(br3);
  
      
      let ol4 = document.createElement('ol');
      let li  = document.createElement('li');
      li.textContent=val.myAnsers[0];
  
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
    
      //To show the on proser about the result
      let addQuestion= document.getElementById('listQuestion');
      addQuestion.appendChild(form);
  
  
    }
  
   /*
   Display Question
   */
  }
  
  // gobal variable //
  let answerList= [
  
  ];
  displayQuestion();
  
  let button=document.getElementById('addQuestion');
  button.addEventListener('click', addQuestion);
  
  