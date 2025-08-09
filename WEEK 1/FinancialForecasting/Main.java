public class Main {
    public static void main(String[] args) {
        double initialInvestment = 10000.0;
        double annualGrowthRate = 0.08; 
        int forecastYears = 10;

        System.out.println("Recursive Forecast:");
        double future = FinancialForecast.forecastValueRecursive(initialInvestment, annualGrowthRate, forecastYears);
        System.out.printf("Future value after %d years: Rs %.2f\n", forecastYears, future);

        System.out.println("\nOptimized with Memoization(alternate):");
        Double[] memo = new Double[forecastYears + 1];
        double futureMemo = FinancialForecast.forecastWithMemo(initialInvestment, annualGrowthRate, forecastYears, memo);
        System.out.printf("Future value (memoized): Rs %.2f\n", futureMemo);
    }
}
