import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const WorkLogGraph = () => {
  const data = [
    { name: "Ankit", hours: 40 },
    { name: "Bhushan", hours: 35 },
    { name: "Abhishek", hours: 50 },
    { name: "Niteen", hours: 30 },
    { name: "Akash", hours: 45 },
    { name: "Sagar", hours: 25 },
  ];

  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#8dd1e1",
    "#a4de6c",
  ];

  return (
    <ResponsiveContainer width="90%" height={250} style={{paddingLeft:"20px"}}>
      <BarChart
        layout="vertical"
        data={data}
        style={{ background: "transparent" }}
      >
        <XAxis type="number" />
        <YAxis type="category" hide={true} />
        <Tooltip />
        <Bar dataKey="hours" fill="rgb(0, 0, 33);">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <LabelList
            dataKey="name"
            position="center"
            style={{ fontSize: "16px", fill: "#fff" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WorkLogGraph;
