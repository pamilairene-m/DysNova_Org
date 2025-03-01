import React, {useState, useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import './Game2.css';



const Game2 = () => {
  const navigate = useNavigate();
  const charArray = ['q', 'd', 'p', 'b'];
  const [hits, setHits] = useState(0);
  const [letter, setLetter] = useState(['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E']);
  const [clicks, setClicks] = useState(0)
  const [misses, setMisses] = useState(0)
  const [timerId, setTimerId] = useState();
  const [timer, setTimer] = useState(0);

  const navigateToNext = () => {
    navigate('/game3-instruct');
  };

  const onStart = () => {
      setTimerId(
        setInterval(() => {
          setTimer(state => state + 1);
        }, 1000)
      );
  };

  const onStop = () => {
    clearInterval(timerId);
  };

  useEffect(() => {
    clearInterval(timerId);
  }, [timerId]);

  const updateValues = (index) => {
    if (letter[index] == 'F'){
      setHits(hits + 1)
    }
    else{
      setMisses(misses + 1)
    }
    setClicks(clicks + 1)
  }


  const getRandomIndex = () => {
    const indexValue = Math.floor(Math.random()*25)
    let arr = letter
    arr[letter.indexOf('F')] = 'E'
    arr[indexValue] = 'F'
    return arr
  };

  const handleClick = (index) => {
    updateValues(index)

    const randomIndex = getRandomIndex();
    setLetter(randomIndex);
  };

  



  return (
    <div>
      <div class="grid2">
        <div class="box2" onClick={() => handleClick(0)}><h1>{letter[0]}</h1></div>
        <div class="box2" onClick={() => handleClick(1)}><h1>{letter[1]}</h1></div>
        <div class="box2" onClick={() => handleClick(2)}><h1>{letter[2]}</h1></div>
        <div class="box2" onClick={() => handleClick(3)}><h1>{letter[3]}</h1></div>
        <div class="box2" onClick={() => handleClick(4)}><h1>{letter[4]}</h1></div>
        <div class="box2" onClick={() => handleClick(5)}><h1>{letter[5]}</h1></div>
        <div class="box2" onClick={() => handleClick(6)}><h1>{letter[6]}</h1></div>
        <div class="box2" onClick={() => handleClick(7)}><h1>{letter[7]}</h1></div>
        <div class="box2" onClick={() => handleClick(8)}><h1>{letter[8]}</h1></div>
        <div class="box2" onClick={() => handleClick(9)}><h1>{letter[9]}</h1></div>
        <div class="box2" onClick={() => handleClick(10)}><h1>{letter[10]}</h1></div>
        <div class="box2" onClick={() => handleClick(11)}><h1>{letter[11]}</h1></div>
        <div class="box2" onClick={() => handleClick(12)}><h1>{letter[12]}</h1></div>
        <div class="box2" onClick={() => handleClick(13)}><h1>{letter[13]}</h1></div>
        <div class="box2" onClick={() => handleClick(14)}><h1>{letter[14]}</h1></div>
        <div class="box2" onClick={() => handleClick(15)}><h1>{letter[15]}</h1></div>
        <div class="box2" onClick={() => handleClick(16)}><h1>{letter[16]}</h1></div>
        <div class="box2" onClick={() => handleClick(17)}><h1>{letter[17]}</h1></div>
        <div class="box2" onClick={() => handleClick(18)}><h1>{letter[18]}</h1></div>
        <div class="box2" onClick={() => handleClick(19)}><h1>{letter[19]}</h1></div>
        <div class="box2" onClick={() => handleClick(20)}><h1>{letter[20]}</h1></div>
        <div class="box2" onClick={() => handleClick(21)}><h1>{letter[21]}</h1></div>
        <div class="box2" onClick={() => handleClick(22)}><h1>{letter[22]}</h1></div>
        <div class="box2" onClick={() => handleClick(23)}><h1>{letter[23]}</h1></div>
        <div class="box2" onClick={() => handleClick(24)}><h1>{letter[24]}</h1></div>
      </div>
      <div>
        <h1 class="score2">{hits}</h1>
      </div>
      <div>
        <h1 class="timer2">{useEffect(() => {onStart()}, [])}</h1>
        {timer < 16 && <h1 class="timer2">{timer}</h1>}
        {timer > 15 && navigateToNext()}
      </div>
    </div>
  )
}

export default Game2