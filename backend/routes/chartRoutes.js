const express = require('express');
const {pushData  , getLastExecution } = require('../controller/teamsController.js');
const { getSummaryTable } = require('../controller/summaryController.js');



const router = express.Router();

router.get('/get', getSummaryTable);
router.get('/getLastExecution', getLastExecution);
router.post('/push-data', pushData);





module.exports = router;