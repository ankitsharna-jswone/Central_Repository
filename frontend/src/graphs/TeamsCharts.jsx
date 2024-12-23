import {
  PieChart,
  Pie,
  Cell,
  Label,
  ResponsiveContainer,
} from "recharts";
import  { useEffect, useState } from "react";


import '../index.css'
import { fetchChartData } from "../api/chartCall.js";


const TeamsCharts = () => {

  const [chartData, setChartData] = useState(null); // Store the chart data
  const [loading, setLoading] = useState(true); // Manage loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchChartData();
        setChartData(data.data); 
      } catch (err) {
        setError(err.message || "Failed to fetch data.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;


  const passStepsPercentage = (
    (chartData.passedSteps / chartData.totalSteps) *
    100
  ).toFixed(2);
  const passFeature = (
    (chartData.passedFeatures / chartData.totalFeatures) *
    100
  ).toFixed(2);
  const passScenariosPercentage = (
    (chartData.passedScenarios / chartData.totalScenarios) *
    100
  ).toFixed(2);

  const StepsData = [
    { name: "Passed", value: chartData.passedSteps },
    { name: "Failed", value: chartData.failedSteps },
    { name: "Skipped", value: chartData.skippedSteps },
  ];

  const FeatureData = [
    { name: "Passed", value: chartData.passedFeatures },
    { name: "Failed", value: chartData.failedFeatures },
  ];

  const ScenariosData = [
    { name: "Passed", value: chartData.passedScenarios },
    { name: "Failed", value: chartData.failedScenarios },
  ];

  const COLORS = ["#45e600", "#dc3545", "#ffc107"];

  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "20px",height:"100%" }}>
      {/* Feature Chart */}
      <div style={{ textAlign: "center" }}  className="Cards">
      <h2> Total Features </h2>
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={FeatureData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              stroke="none" 
            >
              {FeatureData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
              <Label
                value={`${passFeature}%`}
                position="center"
                fontSize="28px"
                fill="#000000"
                style={{ fontWeight: "bold" }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <small>Feature Pass Percentage</small>
      </div>

      {/* Scenarios Chart */}
      <div style={{ textAlign: "center" }} className="Cards">
      <h2> Total Scenarios </h2>
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={ScenariosData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              stroke="none" 
            >
              {ScenariosData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
              <Label
                value={`${passScenariosPercentage}%`}
                position="center"
                fontSize="28px"
                fill="#000000"
                style={{ fontWeight: "bold" }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <small>Scenarios Pass Percentage</small>
      </div>

      {/* Steps Chart */}
      <div style={{ textAlign: "center" }} className="Cards">
        <h2> Total Steps </h2>
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={StepsData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              stroke="none" 
            >
              {StepsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
              <Label
                value={`${passStepsPercentage}%`}
                position="center"
                fontSize="28px"
                fill="#000000"
                style={{ fontWeight: "bold" }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <small>Steps Pass Percentage</small>
      </div>
    </div>
  );
};

export default TeamsCharts;
