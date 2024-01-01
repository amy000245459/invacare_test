const insurer = require('../../model/insurer')
const Insurer = require('../../model/insurer')
const insurerController = {
  getPolicyHolders:  (req, res) => {
    const code = req.query.code
    Insurer.find({code}).lean()
    .then(insurer => res.json({ status: 'success', data: insurer} ))
    .catch(err => next(err))
  },
  
  getParentOfPolicyHolders:  (req, res) => {
    let code = req.params.code
    Insurer.find({code}).lean()
    .then(current_node => {
      code = current_node[0].introducer_code 
      Insurer.find({code}).lean()
      .then(insurer => res.json({ status: 'success', data: insurer} ))
    })
    .catch(err => next(err))
}
}

module.exports = insurerController