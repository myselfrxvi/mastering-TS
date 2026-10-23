import { TaskManager, type Priority, type Status, type Task, type newTaskInput } from "./05_mini_project_task_manager.ts";

import express, { type Response, type Request } from "express";
const app = express();
const PORT = 8080;

app.use(express.json());
const manager = new TaskManager();
manager.addTask({
    title: "Master JavaScript & TypeScript",
    description: "Built from scratch to full REST API",
    priority: "high",
    status: "completed"
});

manager.addTask({
    title: "Build Frontend UI",
    description: "Connect React to our TypeScript API",
    priority: "medium",
    status: "in-progress"
});


app.get("/tasks", (req: Request, res: Response) => {
    res.send(manager.getAllTask());
});

app.post("/tasks", (req: Request, res: Response) => {
    const newTask = manager.addTask(req.body);
    res.status(201).json(newTask);
});
app.delete("/tasks/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const deleted = manager.deleteTask(id);
    if (deleted) {
        res.json({ message: `Task ${id} deleted successfully` });
    }
    else {
        res.status(404).json({ message: `Task ${id} not found` });
    }
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});