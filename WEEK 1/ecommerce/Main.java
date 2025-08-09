public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Phone", "Electronics"),
            new Product(104, "Book", "Stationery"),
            new Product(105, "T-shirt", "Clothing")
        };

        String target = "Phone";

        System.out.println("Linear Search:");
        Product linearResult = LinearSearch.search(products, target);
        System.out.println(linearResult != null ? "Found: " + linearResult : "Product not found");

        System.out.println("\n Binary Search:");
        Product binaryResult = BinarySearch.search(products, target);
        System.out.println(binaryResult != null ? "Found: " + binaryResult : "Product not found");
    }
}