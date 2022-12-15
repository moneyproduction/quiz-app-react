import './index.scss';
import React from 'react';
import Header from './Header';
import Created from './Created';

const questions = [
  {
    title: 'Найменша країна?',
    variants: ['Ватікан', 'Кіпр', 'Монако'],
    correct: 0,
  },
  {
    title: 'Найбільша пустеля?',
    variants: ['Гобі', 'Сахара', 'Арктична'],
    correct: 1,
  },
  {
    title: 'Найбільш населене місто?',
    variants: [
      'Шанхай',
      'Делі',
      'Токіо',
    ],
    correct: 2,
  },
  {
    title: 'Найглибше озеро?',
    variants: [
      'Вікторія',
      'Байкал',
      'Каспійське море',
    ],
    correct: 1,
  },
  {
    title: 'Найменший континент?',
    variants: [
      'Евразія',
      'Северна Америка',
      'Австралія',
    ],
    correct: 2,
  },
  {
    title: 'Найвища вершина?',
    variants: [
      'Чогори',
      'Макалу',
      'г. Джомолунгма',
    ],
    correct: 2,
  },
  {
    title: 'Яка була первісна столиця США?',
    variants: [
      'Нью Йорк',
      'Вашингтон',
      'Лос-Анджелес',
    ],
    correct: 0,
  },
  {
    title: 'Найбільший океан у світі?',
    variants: [
      'Атлантичний',
      'Тихий',
      'Індійський',
    ],
    correct: 1,
  },
  {
    title: 'Яке місто є столицею Іспанії?',
    variants: [
      'Барселона',
      'Мадрид',
      'Валенсия',
    ],
    correct: 1,
  },
  {
    title: 'Який найбільший острів у світі?',
    variants: [
      'Мадагаскар',
      'Нова Гвінея',
      'Гренландія',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      
      <h2>Ви відгадали {correct} відповіді з {questions.length}</h2>
      <a href='/'>
      <button>Спробувати знову</button>
      </a>
     
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const percentage = Math.round((step / questions.length) * 100 ) 
  
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => 
          <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
        }
        
      </ul>
    </>
  );
}



function App() {
  const [step,setStep] = React.useState(0);
  const [correct,setCorrect] = React.useState(0);
  const question = questions[step];
  
  
  const onClickVariant = (index) => {
    console.log(step, index)
    setStep(step + 1)

    if(index === question.correct){
      setCorrect(correct + 1)
    }
  }
  


  return (
    
    <div className="App">
     <Header/>
      {
       
       step !== questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant}/> 
        ):(<Result correct = {correct}/>)
     
      }
     <Created/>
    </div>
  );
}

export default App;
