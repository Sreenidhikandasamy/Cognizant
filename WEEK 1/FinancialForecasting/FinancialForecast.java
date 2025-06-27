public class FinancialForecast {
    public static double forecastValueRecursive(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }

        return forecastValueRecursive(initialValue, growthRate, years - 1) * (1 + growthRate);
    }
    public static double forecastWithMemo(double initialValue, double growthRate, int years, Double[] memo) {
        if (years == 0) return initialValue;

        if (memo[years] != null) return memo[years];

        memo[years] = forecastWithMemo(initialValue, growthRate, years - 1, memo) * (1 + growthRate);
        return memo[years];
    }
}
