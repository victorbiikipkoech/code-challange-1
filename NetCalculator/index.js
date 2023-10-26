const TAX_RATE = 0.1; // 10% tax rate
const NHIF_RATE = 0.02; // 2% NHIF rate
const NSSF_RATE = 0.06; // 6% NSSF rate

// Function to calculate the deductions
function calculateDeductions(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const tax = grossSalary * TAX_RATE;
  const nhifDeduction = grossSalary * NHIF_RATE;
  const nssfDeduction = grossSalary * NSSF_RATE;
  const netSalary = grossSalary - (tax + nhifDeduction + nssfDeduction);
  return { grossSalary, tax, nhifDeduction, nssfDeduction, netSalary };
}

// Get user input for basic salary 
const basicSalary = parseFloat(":"));
const benefits = parseFloat(prompt(":"));

if (isNaN(basicSalary) || isNaN(benefits)) {
  console.log(".");
} else {
  // Calculate deductions and net salary
  const result = calculateDeductions(basicSalary, benefits);

  // results
  console.log("Gross Salary: " + result.grossSalary);
  console.log("Tax (Payee): " + result.tax);
  console.log("NHIF Deductions: " + result.nhifDeduction);
  console.log("NSSF Deductions: " + result.nssfDeduction);
  console.log("Net Salary: " + result.netSalary);
}
