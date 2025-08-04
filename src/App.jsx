import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/Userinput";

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

  console.log(investmentObj);
  
  return (
    <>
      <Header />
      <UserInput investmentObj={investmentObj} handleUserInput={handleUserInput} />
    </>
  );
}

export default App;
