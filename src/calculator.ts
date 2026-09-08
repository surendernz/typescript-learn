function calculateInvestment(principal: number, annualContribution: number, rate: number, time: number): number {
    // Calculate the compound interest
    let amount = principal * Math.pow((1 + rate / 100), time);
    // Add the annual contributions
    for (let i = 1; i <= time; i++) {
        amount += annualContribution * Math.pow((1 + rate / 100), time - i);
    }
    return amount;
}

function printInvestmentDetails(principal: number, annualContribution: number, rate: number, time: number): void {
    const finalAmount = calculateInvestment(principal, annualContribution, rate, time);
    console.log(`Initial Investment: $${principal}`);
    console.log(`Annual Contribution: $${annualContribution}`);
    console.log(`Annual Interest Rate: ${rate}%`);
    console.log(`Investment Duration: ${time} years`);
    console.log(`Final Amount after ${time} years: $${finalAmount.toFixed(2)}`);
}

// Example usage
const principal = 10000; // Initial investment
const annualContribution = 5000; // Annual contribution
const rate = 5; // Annual interest rate in percentage
const time = 10; // Investment duration in years

printInvestmentDetails(principal, annualContribution, rate, time);