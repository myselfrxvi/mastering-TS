interface Car {
    id: number;
    brand: string;
    model: string;
    price: number;
    isElectric: boolean;
}

function partialCar(id: number, fieldsToUpdate: Partial<Car>): void {
    console.log(id, fieldsToUpdate);
}

console.log(partialCar(1, {
    brand: "Toyota",
    model: "Camry",
    price: 20000,
    isElectric: false
}))

console.log(partialCar(2, {
    brand: "Tesla",
    model: "Model S",
    price: 100000,
    isElectric: true
}))

type newCar = Omit<Car, "id" | "price">;

const myNewCar: newCar = {
    brand: "Toyota",
    model: "Camry",
    isElectric: false
}

console.log(myNewCar);

const carStock: Record<number, Car> = {
    0: { id: 1, brand: "Toyota", model: "Camry", price: 20000, isElectric: false },
    1: { id: 2, brand: "Tesla", model: "Model S", price: 100000, isElectric: true }
}