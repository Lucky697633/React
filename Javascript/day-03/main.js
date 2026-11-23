let product = {
    name: "Laptop",
    category: "Electronics",
    stock: 20
};

// Print product name and category
console.log("Product Name:", product.name);
console.log("Category:", product.category);

// Check whether product is in stock
console.log("In Stock:", product.stock > 0);

// Add new property
product.brand = "Dell";

// Increase stock by 10
product.stock += 10;

console.log("Brand:", product.brand);
console.log("Updated Stock:", product.stock);


let account = {
    accountHolder: "Samel Chaudhary",
    balance: 50000
};

// Print account holder's name
console.log("Account Holder:", account.accountHolder);

// Add branch property
account.branch = "Nepalgunj";

// Add isActive property
account.isActive = true;

// Display final account balance
console.log("Final Balance:", account.balance);

console.log("Branch:", account.branch);
console.log("Active:", account.isActive);


let order = {
    customerName: "Samel",
    restaurantName: "Pizza House",
    foodItems: ["Pizza", "Burger", "Coke"]
};

// Print customer's name
console.log("Customer Name:", order.customerName);

// Print restaurant name
console.log("Restaurant Name:", order.restaurantName);

// Print first food item
console.log("First Food Item:", order.foodItems[0]);