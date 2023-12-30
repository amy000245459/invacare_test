const Insurer = require('../../model/insurer')
const insurerController = {
  getPolicyHolders:  (req, res) => {
    const code = req.query.code
    Insurer.find({code}).lean()
    .then(insurer => res.json({ status: 'success', data: insurer} ))
  }
}

module.exports = insurerController