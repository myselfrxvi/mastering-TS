type Priority = "low" | "medium" | "high";
type Status = "pending" | "in-progress" | "completed";
interface Task {
    id: number;
    title: string;
    description: string;
    priority: Priority;
    status: Status;
}

type newTaskInput = Omit<Task, "id">

class TaskManager {
    private Tasks: Task[] = [];
    private nextID: number = 1;

    addTask(input: newTaskInput) {
        const newTask = { id: this.nextID++, ...input }
        this.Tasks.push(newTask)
        console.log(newTask);
    }
    getTaskByStatus(status: Status): Task[] {
        return this.Tasks.filter(t => t.status === status);
    }
    updateTask(id: number, updates: Partial<Task>): Task | null {
        const taskIndex = this.Tasks.findIndex(t => t.id === id)
        if (taskIndex === -1) return null;
        const updatedTask = { ...this.Tasks[taskIndex], ...updates }
        this.Tasks[taskIndex] = updatedTask;
        return updatedTask
    }
    deleteTask(id: number) {
        const taskLength = this.Tasks.length;
        this.Tasks = this.Tasks.filter(t => t.id !== id);
        if (this.Tasks.length == taskLength - 1) {
            return true;
        }
        else return false;
    }
    getAllTask(): Task[] {
        return this.Tasks;
    }

}

const manager = new TaskManager();

console.log("--- 1. ADDING TASKS ---");
manager.addTask({
    title: "Learn TypeScript",
    description: "Master types and interfaces",
    priority: "high",
    status: "completed"
});

manager.addTask({
    title: "Build Mini Project",
    description: "In-memory Task Manager engine",
    priority: "high",
    status: "in-progress"
});

manager.addTask({
    title: "Learn Next.js / Backend",
    description: "Fullstack apps with TS",
    priority: "medium",
    status: "pending"
});

console.log("\n--- 2. GET IN-PROGRESS TASKS ---");
console.log(manager.getTaskByStatus("in-progress"));

console.log("\n--- 3. UPDATE TASK 2 TO COMPLETED ---");
console.log(manager.updateTask(2, { status: "completed" }));

console.log("\n--- 4. DELETE TASK 1 ---");
console.log("Deleted task 1:", manager.deleteTask(1));
console.log("Delete task 99 (doesn't exist):", manager.deleteTask(99));

export { TaskManager, type Priority, type Status, type Task, type newTaskInput };
