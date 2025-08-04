import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/Userinput";
import Results from "./components/Results";

function App() {
  const [investmentObj, setInvestmentObj] = useState({
    initialInvestment: 10000,
    annualInvestment: 3600,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInput(evt) {
    setInvestmentObj(prevInvestmentObj => ({
      ...prevInvestmentObj,
      [evt.target.name]: +evt.target.value
    }))
  }

  const validInput = (investmentObj.duration > 0);

  return (
    <>
      <Header />
      <UserInput userInput={investmentObj} handleUserInput={handleUserInput} />
      {validInput ? <Results input={investmentObj} /> : <p className="center">Duration must be greater than 0!</p>}
    </>
  );
}

export default App;
