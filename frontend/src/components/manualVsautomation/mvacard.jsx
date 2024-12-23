import TestCasesGraph from "../../graphs/ManualVsAutomation"
import './mvacard.css'

const Mvacard = () => {
  return (
    <div className="boxCard mvaCard">
        <h3>
            Manual Vs Automation ( <p id="p"> Test Cases</p>  )
        </h3>
        
        <div className="graph">
            <TestCasesGraph/>
        </div>
    </div>
  )
}

export default Mvacard