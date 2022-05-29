module.exports = app => {

  const LinksPay = require("../controllers/LinksPay.controller.js")
  var router = require("express").Router();
  //Linkspay routes

  router.post('/walletCreated', LinksPay.walletCreated)

  router.post('/getWalletFlag', LinksPay.getWalletFlag)

  router.post('/getUserType', LinksPay.getUserType)

  router.post('/getUserName', LinksPay.getUserName)

  router.post('/getMerchantList', LinksPay.getMerchantList)

  router.post('/getCustomerList', LinksPay.getCustomerList)
  router.post('/getWalletId', LinksPay.getwalletId)

  router.post('/getUserDetails', LinksPay.getUserDetails)
  router.post('/getWalletidAndName',LinksPay.getWalletidAndName)

  app.use('/api/LinksPay', router)
};