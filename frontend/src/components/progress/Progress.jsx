import AutomationProgressChart from '../../graphs/AutomationProgressChart.jsx'
import './Progress.css'
import '../../App.css'
const Progress = () => {
  return (
    
    <div className='boxCard automationProgress'>
      <div className="headers">
        <div className="heading">
          Automation Progress
        </div>
      </div>
      <AutomationProgressChart/>
    </div>
    

  )
}

export default Progress