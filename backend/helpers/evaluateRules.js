const rules = require("../rulesConfig");

const evaluateChecklist = (data) => {
  return rules.map((rule) => ({
    id: rule.id,
    name: rule.name,
    status: rule.check(data) ? "Passed" : "Failed",
  }));
};

module.exports = evaluateChecklist;
