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

  return (
    <>
      <Header />
      <UserInput userInput={investmentObj} handleUserInput={handleUserInput} />
      <Results input={investmentObj} />
    </>
  );
}

export default App;
