const router = require("express").Router();
const transaction = require("../controllers/transaction.controllers");

router.post("/credit", transaction.creditAccount);
router.post("/debit", transaction.debitAccount);
router.post("/transfer", transaction.transferToAccount);
router.get("/transactions", transaction.getTransactions);

router
  .route("/transaction")
  .get(transaction.getTransactionById)
  .delete(transaction.removeTransaction);

module.exports = router;
