import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    LabelList,
    ResponsiveContainer,
  } from "recharts";
  
  const TestCasesCard = () => {
    const data = [
      { team: "Salesforce", testCases: 150, lastRun: "10-10-2024" },
      { team: "ERP", testCases: 200, lastRun: "11-10-2024" },
      { team: "Masters", testCases: 180, lastRun: "12-10-2024" },
      { team: "PB", testCases: 220, lastRun: "13-10-2024" },
      { team: "CCP", testCases: 170, lastRun: "14-10-2024" },
      { team: "Pricing Team", testCases: 190, lastRun: "15-10-2024" },
    ];
  
    const COLORS = "rgb(50, 119, 255)";
  
    return (
      <div className="card">
        <ResponsiveContainer width="80%" height={320}>
          <BarChart layout="vertical" data={data}>
    
            <XAxis type="number" tickLine={false} axisLine={false} />
            <YAxis
              type="category"
              dataKey="team"
              tickLine={false}
              axisLine={false}
              width={0} 
            />
            <Tooltip />
  
            <Bar dataKey="testCases" fill={COLORS}>
              <LabelList
                dataKey="team"
                position="insideLeft"
                style={{ fontSize: "14px", fill: "#fff", fontWeight: "light" }}
              />
              <LabelList
                dataKey="testCases"
                position="right"
                style={{ fontSize: "12px", fill: "#fff" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default TestCasesCard;
  