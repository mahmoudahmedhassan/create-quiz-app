import { React, useState } from "react";

// import style file
import "./home.css";
import ErrorMessage from "../../Components/error/Error";

// import react bootstrab
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";

// import react material
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

// import categories-data
import Categories from "../../Data/Categories";

import { useHistory } from "react-router";

function Home({ name, setName, fetchQuestions }) {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleChange_Category = (event) => {
    setCategory(event.target.value);
  };

  const handleChange_Difficulty = (event) => {
    setDifficulty(event.target.value);
  };
  const handleChange_Name = (event) => {
    setName(event.target.value);
  };

// ============= check and set error to form ================ 

  const handelSubmit = () => {
    if (!category || !difficulty || !name ) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };
 
  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <div className="quiz-setting">
              <h3>quiz setting</h3>
              <div className="quiz-select">
                {error && <ErrorMessage />}

                <TextField
                  id="outlined-basic"
                  label="Enter Your Name"
                  variant="outlined"
                  value={name}
                  onChange={handleChange_Name}
                  style={{ marginBottom: "20px" }}
                />

                <TextField
                  id="filled-select-currency"
                  select
                  label="Select-category"
                  variant="outlined"
                  style={{ marginBottom: "20px" }}
                  value={category}
                  onChange={handleChange_Category}
                >
                  {Categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.category}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="outlined-select-currency-native"
                  select
                  label="select Difficulty"
                  variant="outlined"
                  style={{ marginBottom: "20px" }}
                  value={difficulty}
                  onChange={handleChange_Difficulty}
                >
                  <MenuItem key="Easy" value="easy">
                    Easy
                  </MenuItem>
                  <MenuItem key="Medium" value="medium">
                    Medium
                  </MenuItem>
                  <MenuItem key="Hard" value="hard">
                    Hard
                  </MenuItem>
                </TextField>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handelSubmit}
                  style={{ fontSize: "20px", padding: "5px" }}
                >
                  Start Quiz
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="quiz-svg">
              <Image src="/pic/quiz.svg" alt="quiz.svg" thumbnail />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
