import {React,useEffect} from "react";
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button';

function Result({setScore, score }) {

  const history = useHistory();
  const goHome = () => {
    history.push("./");
    setScore(0)

  };
  
  const LOCALSTORGE_KEY = "key score";

  useEffect(() => {
    const storgeScore = JSON.parse(localStorage.getItem(LOCALSTORGE_KEY));
    if (storgeScore) {
      setScore(storgeScore);
 
    }
  }, [setScore]);

  useEffect(() => {
    localStorage.setItem(LOCALSTORGE_KEY, JSON.stringify(score));
  }, [score]);

 
  
  const styles_main = {
    height: "100vh",
   };

  const styles_h1 = {
    margin: "auto",
    fontSize: "6vw",
    textTransform: "capitalize",
    marginTop: "20px"
  };
  const styles_but ={
    marginTop: '25px',
    fontSize: '2vw'
  }

  return (
    <div style={styles_main}>

        <div style={{margin:'auto',textAlign:'center'}} >

        <h1 style={styles_h1}> finle score : {score}</h1>
         <Button onClick={goHome} variant="contained" color="primary" style={styles_but}  >
          go to home
        </Button>
        </div>
        
     </div>
  );
}

export default Result;
