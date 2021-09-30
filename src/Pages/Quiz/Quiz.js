import { React, useEffect, useState } from "react";
import "./quiz.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router";

function Quiz({ questions, name, setScore, score }) {
  const [options, setOptions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState();
  const history = useHistory();

  //================ set data ====================

  const correct = questions[currentQuestion]?.correct_answer;
  useEffect(() => {
    if (questions[currentQuestion]) {
      setOptions(
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
      );
    }
  }, [questions, currentQuestion]);

// ========= make random answers ==========
  const handleShuffle = (list) => {
    return list.sort(() => Math.random() - 0.5);
  };


  // ======= counter score function ========
  const handleCheck = (option) => {
    setSelected(option);
    if (option === correct) {
      return setScore(score + 1);
    }
   };
   
  // ============ select options and compare to correct answers ============
  const handelSelecte = (option) => {

     if (selected === option && selected === correct) {
      return "correct";
    } else if (selected === option && selected !== correct) {
      return "worng";
    } else if (option === correct) {
      return "correct";
    }
  };
 
// ========= end the game and back to home page =========
  const handleQuit = () => {
    setCurrentQuestion(0);
    setSelected();
    history.push("/");
  };
  
  // ========= go to next question =========
  const handleNext = () => {
    if (currentQuestion > 8) {
      history.push("/result");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    }
  };

 
  return (
    <div>
      {questions ? (
        <>
          <div className="welcome-user">
            <h1> welcome,{name}</h1>
          </div>
          <div className="hey">
            <p className="title-questions">
              {/* {questions[currentQuestion].category} */}
              {questions[currentQuestion]?.category}
            </p>
            <p className="score-questions">score : {score}</p>
          </div>
          <div className="questions-number">
            Question {[currentQuestion + 1]} :
          </div>
          <div className="questions">
            <div className="the-questions">
              {questions[currentQuestion]?.question}
            </div>

 
            <Container>
              <Row>
                {options.map((option) => (
                  <Col xs={12} md={6}>
                    <button
                      key={option}
                      className={`answer ${selected && handelSelecte(option)}`}
                      onClick={() => {
                        handleCheck(option);
                      }}
                      disabled={selected}
                    >
                      {option}
                    </button>
                  </Col>
                ))}
              </Row>
            </Container>

            <div className="buttons">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleQuit}
              >
                end
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                next question
              </Button>
            </div>
          </div>
        </>
      ) : (

        <CircularProgress />
      )}
    </div>
  );
}

export default Quiz;
