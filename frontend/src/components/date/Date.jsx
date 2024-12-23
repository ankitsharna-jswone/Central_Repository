import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./Date.css";
import { fetchLastExecutionData } from "../../api/chartCall.js"; // Assuming this API fetches data

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchLastExecutionData();
        setChartData(data.result);
      } catch (err) {
        setError(err.message || "Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }); // Example: 13 Dec 2024
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }); // Example: 6:30 PM

    return `${formattedDate}   ${formattedTime}`; // Adding gap between date and time
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="boxCard Table">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
                Team
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "black", fontSize: "16px" }}>
                Last Execution Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chartData.map((team, index) => (
              <TableRow key={index} style={{ borderBottom:"1px solid rgba(0, 0, 0, 0.8)" }}>
                <TableCell style={{ fontWeight: "bold", color: "black" }}>
                  {team.source}
                </TableCell>
                <TableCell style={{ fontWeight: "bold", color: "black" }}>
                  {formatDate(team.date)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
