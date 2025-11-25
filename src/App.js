import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

const dictionary = [
  {word: "привет", translation: "hello"},
  {word: "пока", translation: "goodbye"},
  {word: "пить", translation: "drink"},
  {word: "прыжок", translation: "jump"},
  {word: "полёт", translation: "fly"}
]

function App() {
  const [index, setIndex] = useState(0);
  const [trans, showTrans] = useState(false);

  const currentPair = dictionary[index];

  const nextWord = () => {
    if((index + 1) === dictionary.length){
      setIndex(0);
    }else{
      setIndex(index + 1);
    }

    showTrans(false);
  };

  return (
    <div className="App">
      <h1>Тренажёр перевода слов!</h1>
      <div>
        <h3>Слово:</h3>
        <h4>{currentPair.word}</h4>
        <h3>Перевод:</h3>
        {
          trans ? <h4>{dictionary[index].translation}</h4> : <h4>**********</h4>
        }
        <button onClick={() => showTrans(true)}>Нажми, чтобы увидеть перевод!</button>
        <button style={{margin: '40px'}} onClick={() => nextWord()}>
          Продолжить
        </button>
      </div>
    </div>
  );
}

export default App;
