const rules = [
    {
      id: "valuation_fee",
      name: "Valuation Fee Paid",
      check: (data) => data.isValuationFeePaid === true,
    },
    {
      id: "uk_resident",
      name: "UK Resident",
      check: (data) => data.isUkResident === true,
    },
    {
      id: "risk_rating",
      name: "Risk Rating Medium",
      check: (data) => data.riskRating === "Medium",
    },
    {
      id: "ltv_below_60",
      name: "LTV Below 60%",
      check: (data) => {
        const ltv = (data.loanRequired / data.purchasePrice) * 100;
        return ltv < 60;
      },
    },
  ];
  
  module.exports = rules;
  