import './Body.css'
import Progress from './progress/Progress.jsx'
import TeamsPie from './Teams/TeamsPie.jsx'
import Contribution from '../graphs/Contribution.jsx'
import WorkLog from '../graphs/WorkLog.jsx'
import Insights from './insights/Insights.jsx'
import TestCasesCard from './lastexecution/LastExecution.jsx'
import Mvacard from './manualVsautomation/mvacard.jsx' 
import Dashboard from './date/Date.jsx'



const Body = () => {
  return (
    <div className='mainBody'>
        <div className="left">
        <Dashboard/>
          <div className="boxCard firstbox">
            <p>Test Case Count</p>
          <Contribution/>
          </div>
          <div className="boxCard workLog">
            <p> Work Log ( in hrs ) </p>
            <WorkLog/>
            
          </div>
          
        </div>
        <div className="center">
          
        <Progress/>
        <Insights/>
        <TeamsPie/>
        
        
        </div>
        <div className="right">
          
          <TestCasesCard/>
          <Mvacard/>
        </div>
    </div>
  )
}

export default Body