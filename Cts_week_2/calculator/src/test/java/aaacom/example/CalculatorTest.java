package aaacom.example;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Before each test: Calculator object created.");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("After each test: Calculator object destroyed.");
    }

    @Test
    public void testAddition() {
        
        int a = 10;
        int b = 5;
        int result = calculator.add(a, b);
        assertEquals(15, result);
    }

    @Test
    public void testMultiplication() {
        
        int a = 4;
        int b = 3;
        int result = calculator.multiply(a, b);
        assertEquals(12, result);
    }
}
