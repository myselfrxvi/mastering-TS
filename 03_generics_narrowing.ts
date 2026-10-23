function wrapInArray<T>(item: T): T[] {
    return [item];
}
const boxedItem = wrapInArray(42);

const boxedStr = wrapInArray("Hello world");
console.log(boxedItem, boxedStr);

interface Box<T> {
    content: T;
    label: string;
}

const numberBox: Box<number> = {
    content: 10,
    label: "numberBox"
}
const stringBox: Box<string> = {
    content: "hello",
    label: "stringBox"
}
console.log(numberBox, stringBox)


function formatInput(val: string | number): string {
    if (typeof val === "string") {
        return "String: " + val.toUpperCase();
    }
    else return "Number: " + (val * 10);
}

console.log(formatInput("typescript"));
console.log(formatInput(5))