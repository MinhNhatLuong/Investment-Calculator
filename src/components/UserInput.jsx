export default function UserInput({userInput, handleUserInput}) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">initual investment</label>
                <input type="number" required name="initialInvestment" value={userInput.initialInvestment} onChange={handleUserInput}/>
            </p>
            <p>
                <label htmlFor="">annual investment</label>
                <input type="number" required name="annualInvestment" value={userInput.annualInvestment} onChange={handleUserInput}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">expected return</label>
                <input type="number" required name="expectedReturn" value={userInput.expectedReturn} onChange={handleUserInput}/>
            </p>
            <p>
                <label htmlFor="">duration</label>
                <input type="number" required name="duration" value={userInput.duration} onChange={handleUserInput}/>
            </p>
        </div>
    </section>
}