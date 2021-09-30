import {useState,useEffect} from 'react';
import "./App.css";
// import compnents
import Header from "./Components/header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios"

function App() {
  const [name , setName] =useState('');
  const [score, setScore] = useState(0)
  const [questions,setQuestions] = useState([]);

  
  // const fetchQuestions = async (category = "", Difficulty = "") => {

  //   const { data } = await axios.get(
  //     `https://opentdb.com/api.php?amount=10${
  //       category && `&category=${category}`
  //     }${Difficulty && `&difficulty=${Difficulty}`}&type=multiple`);

  //   setQuestions(data.results);
  //   };
  

  //================ fetch data ====================

    const fetchQuestions=(category = "", Difficulty = "") =>{
       axios.get(
        `https://opentdb.com/api.php?amount=10${
          category && `&category=${category}`
        }${Difficulty && `&difficulty=${Difficulty}`}&type=multiple`).then(res =>{
          setQuestions(res.data.results)
         })

        .catch(err =>{
           console.log(err)
        })
       }
       useEffect(() => {
        fetchQuestions();
      }, []);
 
  return (
    <>
      <div className="App" style={{ background: " url(/pic/ques1.png)"}} >
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>
            </Route>
            <Route path="/quiz">
              <Quiz setQuestions={setQuestions} questions={questions} name={name} setScore={setScore} score={score} />
            </Route>
            <Route path="/result">
            <Result score={score} setScore={setScore}/>
            </Route>
          </Switch>
        </Router>
       </div>
     </>
  );
}

export default App;
