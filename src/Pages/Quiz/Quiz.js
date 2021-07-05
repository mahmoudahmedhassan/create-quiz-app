import { React, useEffect, useState } from "react";
import "./quiz.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

function Quiz({ questions, name, setScore, score }) {

  const [options, setOptions] = useState();
  const [currentQuestion,setCurrentQuestion] = useState(0);

  useEffect(() => {
 
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [questions]);

  console.log(questions);
  console.log(options);
 

  const handleShuffle = (list) => {
    return list.sort(() => Math.random() - 0.5);
  };


  return (
    <div>
      {questions ? (
        <>
          <div className="welcome-user">
            <h1> welcome,{name}</h1>
          </div>
          <div className="hey">
            {/* <p className="title-questions">{questions[currentQuestion].category}</p> */}
            <p className="score-questions">score : {score}</p>
          </div>
          <div className="questions-number"> questions 1 :</div>
          <div className="questions">
            <div className="the-questions">
              In the hexadecimal system, what number comes after 9?
            </div>

            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <div className="answer">34</div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="answer">66</div>
                </Col>
            
                <Col xs={12} md={6}>
                  <div className="answer">a</div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="answer">b</div>
                </Col>
              </Row>
            </Container>

            <div className="buttons">
              <Button variant="contained" color="secondary" herf={'/'}>
                end
              </Button>
              <Button variant="contained" color="primary">
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
