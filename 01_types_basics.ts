function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 3));

const developerName: string = "Ravi";
const techstack: string[] = ["python", "javascript", "typescript"];

function formatUser(name: string, age: number, isEmployed: boolean) {
    return `Dev name is ${name}, status: ${isEmployed ? "employed" : "not employed"}`
}

function sumScores(scores: number[]): number {
    return scores.reduce((total, current) => total + current, 0)
}

console.log(sumScores([1, 2, 3, 4, 5]))
console.log(formatUser(developerName, 18, true))