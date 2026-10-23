type Plan = "free" | "pro" | "enterprise";

interface product {
    id: number;
    title: string;
    price: number;
}
interface Customer {
    id: number;
    name: string;
    plan: Plan;
    cart: product[];
}

function calculateCartTotal(customer: Customer, product: product): number {
    if (customer.plan === "free") {
        return product.price * 1000;
    }

    if (customer.plan === "pro") {
        return product.price * 50
    }
    else { return product.price * 100 }
}

const testCustomer: Customer = {
    id: 1,
    name: "Ravi",
    plan: "pro",
    cart: [
        { id: 1, title: "product1", price: 10 },
        { id: 2, title: "product2", price: 20 },
    ]
};

const testProduct: product = {
    id: 1,
    title: "product1",
    price: 10,
};

console.log("Total:", calculateCartTotal(testCustomer, testProduct));

