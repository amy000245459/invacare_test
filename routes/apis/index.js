const express = require('express')
const router = express.Router()
const insurerController = require('../../controllers/apis/insurer-controller')
//const { apiErrorHandler } = require('../../middleware/error-handler')

router.get('/api/policyholders/:code/top', insurerController.getParentOfPolicyHolders)
router.get('/api/policyholders', insurerController.getPolicyHolders)
//router.use('/', apiErrorHandler)

module.exports = router
