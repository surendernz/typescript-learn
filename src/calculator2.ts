
//data:
// initial amount
// annual contribution
// returns expected
// duration of investment

type InvestmentData = {
    principal: number; // Initial investment amount
    annualContribution: number; // Annual contribution amount
    rate: number; // Annual interest rate in percentage
    time: number; // Investment duration in years
};

type InvestmentResult = {
    year: string; // Year of the investment
    totalAmount: number; // Final amount after investment duration
    totalContribution: number; // Total contributions made over the investment duration
    totalInterestEarned: number; // Total interest earned over the investment duration
};

type CalculatedResult = InvestmentResult[] | string;
function calculateInvestment(data: InvestmentData): CalculatedResult {
    
    const { principal, annualContribution, rate, time } = data;
    if(principal < 0 || annualContribution < 0 || rate < 0 || time < 0) {
        return "Invalid input: All values must be non-negative.";
    }
    let totalAmount = principal;
    let totalContribution = 0;
    let totalInterestEarned = 0;
    const annualResults: InvestmentResult[] = [];

    // Add the annual contributions
    for (let i = 1; i <= time; i++) {
        totalAmount = totalAmount * (1 + rate / 100);
        totalInterestEarned = totalAmount - totalContribution - principal;
        totalContribution += annualContribution;
        totalAmount += annualContribution;
        annualResults.push({
            year: `Year ${i}`,
            totalAmount,
            totalContribution,
            totalInterestEarned
        });
    }
 
    return annualResults;
}

function printInvestmentDetails(data: CalculatedResult): void {
    if(typeof data === "string") {
        console.log(data);
    } else {
        data.forEach(result => {
            console.log(`Year: ${result.year}`);
            console.log(`Total Amount: ${result.totalAmount.toFixed(2)}`);
            console.log(`Total Contribution: ${result.totalContribution.toFixed(2)}`);
            console.log(`Total Interest Earned: ${result.totalInterestEarned.toFixed(2)}`);
            console.log('---------------------------');
        });
    }
}

// Example usage
const investmentData: InvestmentData = {
    principal: 5000, // Initial investment
    annualContribution: 500, // Annual contribution
    rate: 8, // Annual interest rate in percentage
    time: 10 // Investment duration in years
};

printInvestmentDetails(calculateInvestment(investmentData));