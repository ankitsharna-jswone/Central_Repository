const { upsertData } = require('../models/chartModel');
const {fetchAndFormatLatestTeamData } = require('../models/featureModel.js')

const pushData = async (req, res) => {
  try {
    const data = req.body;
    if (!data.chartData || typeof data.chartData !== 'object') {
      return res.status(400).send({ success: false, message: "Invalid chartData" });
    }

    const result = await upsertData(data);
    res.status(200).send({ success: true, message: "Data inserted successfully", result });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error inserting data", error: error.message });
  }
}

const getLastExecution = async (req,res) => {
  try{
     const result = await fetchAndFormatLatestTeamData();
     res.status(200).send({ success : true, message : " Data fetched form the databse", result});
  }
  catch(error){
    res.status(500).send({ success: false, message: "Error inserting data", error: error.message });
  }
}


module.exports = { pushData , getLastExecution };
