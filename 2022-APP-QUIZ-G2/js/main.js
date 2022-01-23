
// Get button 

let image=document.getElementById('logo')
let button=document.getElementsByClassName('btn-group')
let buttonStart=document.getElementsByClassName('button-5')
let editbutton=document.getElementsByClassName('button-6')
let container =document.getElementsByClassName('container')



// Display Question
function displayQuestion(questions){
  

}


const questions = [
  {
    question: '1. I ....(hear) a new song on the radio.',
    answers: [
      { text: 'A. heard', correct: true },
      { text: 'B. hade', correct: false },
      { text: 'C. hote', correct: false },
      { text: 'D. harding', correct: false }
    ]
  },
  {
    question: '2.I .....(read)three books last week',
    answers: [
      { text: 'A.rade', correct: false },
      { text: ' B. reading', correct: false },
      { text: 'C. read', correct: true },
      { text: 'D. readed', correct: false }
    ]
  },
  {
    question: '3.They ......(speak) French to the waitress.',
    answers: [
      { text: 'A.speak', correct: false },
      { text: 'B. spoke', correct: true },
      { text: 'C.speaking ', correct: false },
      { text: 'D.spoked', correct: false }
    ]
  },
  {
    question: '4.She ..........(be) a teacher .',
    answers: [
      { text: ' A.is', correct: true },
      { text: 'B. am', correct: false },
      { text: 'C.are', correct: false},
      { text: 'D.does', correct: false }
    ]
  },
  {
    question: '5.We ......(be) hungry.',
    answers: [
      { text: ' A.is', correct: false },
      { text: 'B. am', correct: false },
      { text: 'C.are', correct: true },
      { text: 'D.does', correct: false }
    ]

  },
  {
    question: '6.....(you/come) tonight?',
    answers: [
      { text: 'A.Yor are come', correct: false },
      { text: 'B. Do you come', correct: false },
      { text: 'C.Are you came', correct: false },
      { text: 'D.Are you coming', correct: true }
    ]
  },
  {
    question: '7............(he/eat) rice every day?',
    answers: [
      { text: 'A.Does he eat', correct: true },
      { text: 'B. Did he ate', correct: false },
      { text: 'C.Is he eat', correct: false },
      { text: 'D.He is eating', correct: false }
    ]
  },
  {
    question: '8.Julie .........(sleep) at three o-clock.',
    answers: [
      { text: 'A.sleeping', correct: false },
      { text: 'B. was sleeping', correct: true },
      { text: 'C.slept', correct: false },
      { text: 'D.is sleep', correct: false }
    ]
  },
  {
    question: '9.You ..........(study) at nine o-clock.',
    answers: [
      { text: 'A.studing', correct: false },
      { text: 'B.were studying', correct: true },
      { text: 'C.was study', correct: false },
      { text: 'D.studied', correct: false }
    ]
  },
  {
    question: '10.Is web development fun?',
    answers: [
      { text: 'A.will win', correct: true },
      { text: 'B. won', correct: false },
      { text: 'C.be won', correct: false },
      { text: 'D.winn', correct: false }
    ]

  }
]
