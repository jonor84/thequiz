import { useState } from "react";
import "../styles/quiz.css";

export const Quiz = () => {
  const [points, setPoints] = useState(0);
  const [show, setShow] = useState(false);
  
const randomColor = () : string => {
        return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}

  const handleChange = () => {
    setPoints(points + 1);
    document.body.style.backgroundColor = randomColor();
  };
  

  const handleClick = () => {
    setShow(true);
  };
  console.log(points);

  return (
    <div className="quiz-main">
      <h1>Quiz</h1>
      <div className="question-container">
        <div className="unit">
          <h3>Vilket år invigdes Eiffeltornet i Paris?</h3>
          <div className="answers">
            <input type="radio" name="q1" onChange={handleChange} />{" "}
            <p>a 1889</p>
            <input type="radio" name="q1" /> <p>b 1901</p>
            <input type="radio" name="q1" /> <p>c 1915</p>
          </div>
        </div>
        <div className="unit">
          <h3>Vilket land är känt för att vara födelseplatsen för pizza?</h3>
          <div className="answers">
            <input type="radio" name="q2" /> <p>a Spanien</p>
            <input type="radio" name="q2" onChange={handleChange} />{" "}
            <p>b Italien</p>
            <input type="radio" name="q2" /> <p>c Grekland</p>
          </div>
        </div>
        <div className="unit">
          <h3>Vem skrev boken "Mio, min Mio"?</h3>
          <div className="answers">
            <input type="radio" name="q3" onChange={handleChange} />{" "}
            <p>a Astrid Lindgren</p>
            <input type="radio" name="q3" /> <p>b Roald Dahl</p>
            <input type="radio" name="q3" /> <p>c J.K. Rowling</p>
          </div>
        </div>
        <div className="unit">
          <h3></h3>Vilket är världens största ocean?
          <div className="answers">
            <input type="radio" name="q4" /> <p>a Indiska oceanen</p>
            <input type="radio" name="q4" /> <p>b Atlanten</p>
            <input type="radio" name="q4" onChange={handleChange} />{" "}
            <p>c Stilla havet</p>
          </div>
        </div>
        <div className="unit">
          <h3>Vilket år startade andra världskriget?</h3>
          <div className="answers">
            <input type="radio" name="q5" onChange={handleChange} />{" "}
            <p>a 1939</p>
            <input type="radio" name="q5" /> <p>b 1941</p>
            <input type="radio" name="q5" /> <p>c 1945</p>
          </div>
          <button onClick={handleClick}>Visa resultat</button>
          {show && (
            <div>
              <h2>Du fick {points} poäng!</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
