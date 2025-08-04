import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  // const initialInvesment =
  //   resultData[0].valueEndOfYear -
  //   resultData[0].interest -
  //   resultData[0].annualInvestment;
  const initialInvesment = input.initialInvesment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((singleRow, index) => {
          const totalInterest =
            singleRow.valueEndOfYear -
            singleRow.annualInvestment * singleRow.year -
            initialInvesment;
          const totalAmountInvested = singleRow.valueEndOfYear - totalInterest;
          return (
            <tr key={index}>
              <td>{singleRow.year}</td>
              <td>{formatter.format(singleRow.valueEndOfYear)}</td>
              <td>{formatter.format(singleRow.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
