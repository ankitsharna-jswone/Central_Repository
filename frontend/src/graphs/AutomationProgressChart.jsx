import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { month: 'Jan', TeamA: 10, TeamB: 70, TeamC: 60, TeamD: 0, TeamE: 40, TeamF: 0 },
  { month: 'Feb', TeamA: 85, TeamB: 75, TeamC: 65, TeamD: 92, TeamE: 55, TeamF: 45 },
  { month: 'Mar', TeamA: 78, TeamB: 80, TeamC: 68, TeamD: 93, TeamE: 60, TeamF: 50 },
  { month: 'Apr', TeamA: 90, TeamB: 78, TeamC: 70, TeamD: 95, TeamE: 58, TeamF: 52 },
  { month: 'May', TeamA: 87, TeamB: 76, TeamC: 72, TeamD: 96, TeamE: 56, TeamF: 54 },
  { month: 'Jun', TeamA: 92, TeamB: 80, TeamC: 74, TeamD: 98, TeamE: 60, TeamF: 56 },
  { month: 'Jul', TeamA: 95, TeamB: 82, TeamC: 76, TeamD: 97, TeamE: 62, TeamF: 58 },
  { month: 'Aug', TeamA: 93, TeamB: 85, TeamC: 78, TeamD: 96, TeamE: 40, TeamF: 60 },
  { month: 'Sep', TeamA: 88, TeamB: 88, TeamC: 80, TeamD: 95, TeamE: 66, TeamF: 62 },
  { month: 'Oct', TeamA: 85, TeamB: 90, TeamC: 82, TeamD: 94, TeamE: 68, TeamF: 64 },
  { month: 'Nov', TeamA: 87, TeamB: 92, TeamC: 84, TeamD: 93, TeamE: 70, TeamF: 66 },
  { month: 'Dec', TeamA: 90, TeamB: 95, TeamC: 86, TeamD: 92, TeamE: 72, TeamF: 68 },
];

const AutomationProgressChart = () => {
  return (
    <ResponsiveContainer width="100%" height="60%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorTeamA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.5} />
            <stop offset="60%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTeamB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.5} />
            <stop offset="60%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTeamC" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffc658" stopOpacity={0.5} />
            <stop offset="60%" stopColor="#ffc658" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTeamD" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#d88884" stopOpacity={0.5} />
            <stop offset="60%" stopColor="#d88884" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTeamE" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#84d8ca" stopOpacity={0.5} />
            <stop offset="60%" stopColor="#84d8ca" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTeamF" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#d8ca84" stopOpacity={0.5} />
            <stop offset="60%" stopColor="#d8ca84" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="none" />

        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />

        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.445)",
            color: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)"
          }}
        />



        <Area type="monotone" dataKey="TeamA" stroke="#8884d8" fill="url(#colorTeamA)" />
        <Area type="monotone" dataKey="TeamB" stroke="#82ca9d" fill="url(#colorTeamB)" />
        <Area type="monotone" dataKey="TeamC" stroke="#ffc658" fill="url(#colorTeamC)" />
        <Area type="monotone" dataKey="TeamD" stroke="#d88884" fill="url(#colorTeamD)" />
        <Area type="monotone" dataKey="TeamE" stroke="#84d8ca" fill="url(#colorTeamE)" />
        <Area type="monotone" dataKey="TeamF" stroke="#d8ca84" fill="url(#colorTeamF)" />
      </AreaChart>
    </ResponsiveContainer>

  );
};

export default AutomationProgressChart;
