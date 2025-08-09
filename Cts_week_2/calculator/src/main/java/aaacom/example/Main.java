package aaacom.example;

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int sum = calc.add(10, 20);
        int product = calc.multiply(5, 3);
        
        System.out.println("Sum: " + sum);
        System.out.println("Product: " + product);
    }
}
