import './Insights.css'

const Insights = () => {
    return (
        <div className='boxCard centerInsight'>
            <div className="cards">
                <div className="header">
                    559
                </div>
                <div className="subtitle">
                    Testcase Executed
                </div>
            </div>
            <div className="cards">
                <div className="header">
                    56
                </div>
                <div className="subtitle">
                    Total Time Taken (mins)
                </div>
            </div>
            
            <div className="cards">
                <div className="header" style={{color:"#7dff55"}}>
                    450
                </div>
                <div className="subtitle">
                    Toatal TestCase Passed
                </div>
                
            </div>
            <div className="cards">
                <div className="header" style={{color:"red"}}>
                    4
                </div>
                <div className="subtitle">
                Total Bugs Found
                </div>
            </div>

        </div>
    )
}

export default Insights