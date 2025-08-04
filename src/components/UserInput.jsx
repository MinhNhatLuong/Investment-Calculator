export default function UserInput({investmentObj, handleUserInput}) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">initual investment</label>
                <input type="number" required name="initialInvestment" value={investmentObj.initialInvestment} onChange={handleUserInput}/>
            </p>
            <p>
                <label htmlFor="">annual investment</label>
                <input type="number" required name="annualInvestment" value={investmentObj.annualInvestment} onChange={handleUserInput}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">expected return</label>
                <input type="number" required name="expectedReturn" value={investmentObj.expectedReturn} onChange={handleUserInput}/>
            </p>
            <p>
                <label htmlFor="">duration</label>
                <input type="number" required name="duration" value={investmentObj.duration} onChange={handleUserInput}/>
            </p>
        </div>
    </section>
}