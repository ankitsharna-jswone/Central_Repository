
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  {
    name: "Salesforce",
    CanAutomate: 120,
    Automated: 80,
  },
  {
    name: "ERP",
    CanAutomate: 100,
    Automated: 70,
  },
  {
    name: "Pricing",
    CanAutomate: 150,
    Automated: 110,
  },
  {
    name: "CCP",
    CanAutomate: 130,
    Automated: 90,
  },
  {
    name: "Private Brands",
    CanAutomate: 90,
    Automated: 60,
  },
  {
    name: "Retail",
    CanAutomate: 110,
    Automated: 85,
  },
];

const TestCasesGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        data={data}
      >
        <XAxis dataKey="name" tick={{ fontSize: 14 }} />
        <YAxis hide />
        <Tooltip />
        <Legend />

        <Bar dataKey="Automated" stackId="a" fill="#9be200" name="Automated">
          <LabelList dataKey="Automated" fill="#fff" position="center" />
        </Bar>

        <Bar dataKey="CanAutomate" stackId="a" fill="#00731d" name="Manual">
          <LabelList dataKey="CanAutomate" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TestCasesGraph;
