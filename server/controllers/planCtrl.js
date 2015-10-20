var Plan = require('../models/Plan');

module.exports = {
  // Get all plan documents
  getAllPlans: function(req, res) {
    Plan.find({})
    .populate('location')
    .exec(function(err, plans) {
      if (err) return res.status(500).send(err);
      else res.send(plans);
    });
  },

  // Create new Plan document
  addPlan: function(req, res) {
    var newPlan = new Plan(req.body)
    .save(function(err, plan) {
      if (err) return res.status(500).send(err);
      else res.send(plan);
    });
  }
};
