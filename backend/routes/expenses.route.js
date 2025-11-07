import express from "express";
import { saveExpenses,getCoreMetrics,getCharts,getExpenseForADate } from "../controllers/expenses.controller.js";
const router = express.Router();
saveExpenses

router.route('/create').post(saveExpenses)
router.route('/core-metrics').get(getCoreMetrics);
router.route('/get-expense').post(getExpenseForADate);
router.route('/charts').get(getCharts);

export default router;