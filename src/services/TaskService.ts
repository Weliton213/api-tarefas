import type { Task } from "../types/Task"

const tasks: Task[] = []

export function createTask(title: string): Task {
    const newTask: Task = {
        id: Date.now(),
        title,
        completed: false
    }

    tasks.push(newTask)

    return newTask
}


export function getAllTasks(): Task[] {
    return tasks
}

export function getTaskById(id: number) : Task | undefined {
    return tasks.find((task) => task.id === id)
}

export function updateTask(
    id: number,
    title?: string,
    completed?: boolean
): Task | undefined {
    const task = tasks.find((task) => task.id === id)

    if (!task) {
        return undefined
    }

    if (title !== undefined) [
        task.title = title
    ]

    if (completed !== undefined) {
        task.completed = completed
    }

    return task
}

export function deleteTask(id: number): boolean {
    const taskIndex = tasks.findIndex((task) => task.id === id)

    if (taskIndex === -1){
        return false
    }

    tasks.splice(taskIndex, 1)

    return true
}