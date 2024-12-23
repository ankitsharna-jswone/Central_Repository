import apiClient from "./apiCalls";


export const fetchChartData = async () => {
  try {
    const response = await apiClient.get("/api/charts/get"); // Endpoint for your API
    return response.data; // Return the response data
  } catch (error) {
    console.error("Failed to fetch chart data:", error);
    throw error; 
  }
};

export const fetchLastExecutionData = async ()=>{
  try {
    const response = await apiClient.get("/api/charts/getLastExecution");
    return response.data; 
  } catch (error) {
    console.error("Failed to fetch chart data:", error);
    throw error; 
  }
};
