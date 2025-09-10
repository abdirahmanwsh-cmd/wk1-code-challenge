// Net Salary Calculator using official Kenyan tax, NHIF, and NSSF rates

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // NSSF (employee’s 6% on Tier I & Tier II)
    const tier1Payable = Math.min(basicSalary, 7000);
    const tier2Payable = Math.max(0, Math.min(basicSalary - 7000, 36000 - 7000));
    const nssfDeduction = 0.06 * tier1Payable + 0.06 * tier2Payable;

    // NHIF Deduction
    let nhifDeduction = 0;
    if (grossSalary <= 5999) nhifDeduction = 150;
    else if (grossSalary <= 7999) nhifDeduction = 300;
    else if (grossSalary <= 11999) nhifDeduction = 400;
    else if (grossSalary <= 14999) nhifDeduction = 500;
    else if (grossSalary <= 19999) nhifDeduction = 600;
    else if (grossSalary <= 24999) nhifDeduction = 750;
    else if (grossSalary <= 29999) nhifDeduction = 850;
    else if (grossSalary <= 34999) nhifDeduction = 900;
    else if (grossSalary <= 39999) nhifDeduction = 950;
    else if (grossSalary <= 44999) nhifDeduction = 1000;
    else if (grossSalary <= 49999) nhifDeduction = 1100;
    else if (grossSalary <= 59999) nhifDeduction = 1200;
    else if (grossSalary <= 69999) nhifDeduction = 1300;
    else if (grossSalary <= 79999) nhifDeduction = 1400;
    else if (grossSalary <= 89999) nhifDeduction = 1500;
    else if (grossSalary <= 99999) nhifDeduction = 1600;
    else nhifDeduction = 1700;

    // PAYE Calculation
    const personalRelief = 2400;

    let taxable = grossSalary - nssfDeduction;
    let taxBeforeRelief = 0;

    if (taxable <= 24000) {
        taxBeforeRelief = taxable * 0.10;
    } else if (taxable <= 24000 + 8333) {
        taxBeforeRelief = 24000 * 0.10 + (taxable - 24000) * 0.25;
    } else if (taxable <= 24000 + 8333 + 467667) {
        taxBeforeRelief = 24000 * 0.10 + 8333 * 0.25 + (taxable - 24000 - 8333) * 0.30;
    } else if (taxable <= 24000 + 8333 + 467667 + 300000) {
        taxBeforeRelief = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 +
            (taxable - 24000 - 8333 - 467667) * 0.325;
    } else {
        taxBeforeRelief = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 +
            300000 * 0.325 + (taxable - 24000 - 8333 - 467667 - 300000) * 0.35;
    }

    const paye =Math.round(Math.max(0, taxBeforeRelief - personalRelief));

    const netSalary = grossSalary - (nssfDeduction + nhifDeduction + paye);

    return {
        BasicSalary: basicSalary,
        Benefits: benefits,
        GrossSalary: grossSalary,
        NSSF: nssfDeduction,
        NHIF: nhifDeduction,
        PAYE: paye,
        NetSalary: netSalary
    };
}

// Example
console.log(calculateNetSalary(20000, 10000));