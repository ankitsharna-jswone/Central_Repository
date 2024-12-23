import TestCasesCard from "../../graphs/TestCaseCountgraph"
import './LastExecution.css'

const LastExecution = () => {
  return (
    <div className="boxCard testExecution">
      <h3> Test Case Exectued </h3>
      <div className="graph">
      <TestCasesCard/>
      </div>
      
    </div>
  )
}

export default LastExecution