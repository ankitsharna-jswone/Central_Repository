import { RadialBarChart, RadialBar, Cell, Legend } from "recharts";

const data = [
  { name: "Ankit", value: 89 },
  { name: "Niteen", value: 141 },
  { name: "Abhishek", value: 77 },
  { name: "Akash", value: 50 },
  { name: "Sagar", value: 40 },
  { name: "Bhushan", value: 30 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658", "#d88884", "#84d8ca", "#d8ca84"];

const Contribution = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px", marginTop:"10px" }}>
      <RadialBarChart
        width={400}
        height={350}
        innerRadius="20%"
        outerRadius="100%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          dataKey="value"
          clockWise
          label={{ position: "insideStart", fill: "#fff", fontSize: 15 }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </RadialBar>
        <Legend
          wrapperStyle={{
            position: "absolute",
            display: "flex",
            textAlign : "center",
            top: "40px", 
            width : "70%",
            right: "10px", 
            fontSize: "14px",
          }}
        />

      </RadialBarChart>
    </div>
  );
};

export default Contribution;
